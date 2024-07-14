import { useState } from 'react';
import { useEffect } from "react";
import contactsArray from '../../contacts.json';
import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const localContacts = JSON.parse(window.localStorage.getItem("contacts"));
    return localContacts !== null ? localContacts : contactsArray;
  });
  const [filterSearch, setFilterSearch] = useState('');

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    } )
  }

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterSearch.toLowerCase()))

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterSearch} onFilter={setFilterSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
