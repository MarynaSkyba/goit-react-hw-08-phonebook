import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './contactsList/ContactList';
import ContactForm from './contactsForm/ContactForm';
import Filter from './filter/Filter';
import { Title } from './App/Title.styled';
import store from '../redux/store';

console.log(store.getState());

export default function App() {
  // useEffect(() => {
  //   const currentContacts = JSON.parse(localStorage.getItem('contacts')) ?? '';
  //   currentContacts && setContacts(currentContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = (name, number) => {
  //   if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   const newContact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };
  //   setContacts(prevState => [newContact, ...prevState]);
  // };

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </div>
  );
}
