import { useEffect } from 'react';
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redax/selectors/selectors';
import { getAllContactsThunk } from 'redax/thunks/thunks';

import ContactForm from '../contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';

const App = () => {
  const dispatch = useDispatch()
  const filteredContacts = useSelector(getFilteredContacts)
  console.log(filteredContacts)

  useEffect(() => {
    const getAllProducts = () => dispatch(getAllContactsThunk())
    getAllProducts()
  }, [dispatch])

  return (
    <div className={styles.container} >

      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />

      <h1 className={styles.title}>Contacts</h1>
      <Filter />

      {filteredContacts?.length > 0 && < ContactList />}

    </div>
  );
};
export { App }
