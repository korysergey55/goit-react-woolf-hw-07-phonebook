import { createAsyncThunk } from '@reduxjs/toolkit'
import { getContactsAPI, createContactAPI, deleteContactAPI } from "api/api";

export const getAllContactsThunk = createAsyncThunk('cantacts/getAllContacts', async (_, thunkAPI) => {
  try {
    const response = await getContactsAPI()
    return response
  }
  catch (evt) {
    return thunkAPI.rejectWithValue(evt.message);
  }
})
export const postNewContactThink = createAsyncThunk('contacts/createContact', async (data, thunkAPI) => {
  try {
    const response = await createContactAPI(data)
    return response
  }
  catch (evt) {
    return thunkAPI.rejectWithValue(evt.message);
  }
})
export const deleteContactThink = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const response = await deleteContactAPI(id)
    return response
  }
  catch (evt) {
    return thunkAPI.rejectWithValue(evt.message);
  }
})