Phonebook-App

Tasks

- Refactor the Contact Book code. Released the code responsible for storing and
  reading contacts from local storage, and added interaction with the backend
  for storing contacts.

- Create your personal backend for development using the mockapi.io UI service.

- Use the createAsyncThunk function to declare asynchronous action generators
  and execute HTTP requests. Use createSlice to process actions and change data
  in the Redux state.

- Announce the following transactions: receiving an array of contacts (GET
  method) by request. Basic action type "contacts/fetchAll". addContact - adding
  a contact (POST method).Basic action type "contacts/addContact".
  deleteContact - delete a contact (DELETE method). The base action type is
  "contacts/deleteContact".

- The application should consist of a form and a list of contacts. In the
  current step, implement adding the contact name and phone number and
  displaying the contact list. The application should not store contacts between
  different sessions (page refreshes).

- Each contact must be an object with name, number and id properties. To
  generate identifiers, use any appropriate package, for example nanoid.

- Add a search field that can be used to filter the list of contacts by name.

- Deny the user the ability to add contacts whose names are already in the phone
  book. When you try to perform such an action, display a warning.

- Expand the functionality of the application, allowing the user to delete
  previously saved contacts.
