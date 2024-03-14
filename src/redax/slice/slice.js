import { createSlice } from '@reduxjs/toolkit'
import { getAllContactsThunk, postNewContactThink, deleteContactThink } from 'redax/thunks/thunks'

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}

const handleFulfildAllProducts = (state, { payload }) => {
  state.contacts.items = payload
  state.contacts.isLoading = false
}
const handleFulfildNewProduct = (state, { payload }) => {
  state.contacts.items.push(payload)
  state.contacts.isLoading = false
}
const handleDeleteFulfild = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter((item) => item.id !== payload.id)
}


const handlePanding = (state) => {
  state.contacts.isLoading = true
}
const handleRejected = (state, { error }) => {
  state.contacts.isLoading = false
  state.contacts.error = error.message
}

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload
    },

    resetFilter: (state) => {
      state.filter = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfildAllProducts)
      .addCase(getAllContactsThunk.pending, handlePanding)
      .addCase(getAllContactsThunk.rejected, handleRejected)

      .addCase(postNewContactThink.fulfilled, handleFulfildNewProduct)
      .addCase(postNewContactThink.pending, handlePanding)
      .addCase(postNewContactThink.rejected, handleRejected)

      .addCase(deleteContactThink.fulfilled, handleDeleteFulfild)
      .addCase(deleteContactThink.pending, handlePanding)
      .addCase(deleteContactThink.rejected, handleRejected)
  }
})
export const { createContact, deleteContact, setContacts, setFilter, resetFilter } = phonebookSlice.actions
export const phonebookReducer = phonebookSlice.reducer

