import { useState } from 'react'
import styles from './styles.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from 'redax/slice/slice';
import { getContacts } from 'redax/selectors/selectors';
import { postNewContactThink } from 'redax/thunks/thunks';

import { toast } from 'react-toastify';


const ContactForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
  const [state, setState] = useState({ name: '', number: '' })

  const createNewContact = async (data) => {
    if (contacts?.some((contact) => contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())) {
      toast.error(`This Name - ${data.name} already exist!`, {
        theme: 'colored',
      })
      return;
    }
    if (contacts?.some((contact) => contact.number === data.number)) {
      toast.error(`This Number - ${data.number} already exist!`, {
        theme: 'colored',
      })
      return;
    }
    dispatch(postNewContactThink(data))
    toast.success(`Contact - '${data.name}' was successfuly created!`, {
      theme: 'colored',
    })
    dispatch(resetFilter())
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState((prev) => ({ ...prev, [name]: value }))
  }

  const formReset = () => {
    setState({ name: '', number: '' })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    createNewContact(state)
    formReset()
  }

  return (
    <form className={styles.form} id='contactForm' onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input
          className={styles.input}
          name="name"
          value={state.name}
          type="text"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="number">Number</label>
        <input
          className={styles.input}
          name="number"
          value={state.number}
          type="tel"
          id="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </div>
      <button
        className={styles.button}
        type='submit'
        htmlFor='contactForm'>
        {'Add contact'}
      </button>
    </form>
  );
}
export default ContactForm;