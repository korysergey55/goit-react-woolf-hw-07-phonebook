import { createAsyncThunk } from '@reduxjs/toolkit'
import { getContactsAPI, createContactAPI, deleteContactAPI } from "api/api";

export const getAllContactsThunk = createAsyncThunk('cantacts/getAllContacts', () => getContactsAPI())
export const postNewContactThink = createAsyncThunk('contacts/createContact', (data) => createContactAPI(data))
export const deleteContactThink = createAsyncThunk('contacts/deleteContact', (id) => deleteContactAPI(id))