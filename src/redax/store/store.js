import { configureStore } from '@reduxjs/toolkit'
import { phonebookReducer } from 'redax/slice/slice'

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer
  }
})


