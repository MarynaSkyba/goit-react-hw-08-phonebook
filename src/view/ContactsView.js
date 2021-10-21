import { useDispatch } from 'react-redux';
import { fetchContactsAction } from '../redux/phonebook/phonebook-operations';
import { useEffect } from 'react';
import ContactList from '../components/ContactsList/ContactList';
import ContactForm from '../components/ContactsForm/ContactForm';
import Filter from '../components/Filter/Filter';

export default function ContactsView(params) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContactsAction()), [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
