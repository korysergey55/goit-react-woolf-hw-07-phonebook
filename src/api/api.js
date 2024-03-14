import axios from "axios";
const BASE_URL = 'https://65f18a1d034bdbecc762f7e8.mockapi.io/contacts'

export const getContactsAPI = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`)
  return response.data
}

export const createContactAPI = async (data) => {
  const response = await axios.post(`${BASE_URL}/contacts/`, data)
  return response.data
}

export const deleteContactAPI = async (id) => {
  const response = await axios.delete(`${BASE_URL}/contacts/${id}`)
  return response.data
}