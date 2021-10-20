import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from '../redux/phonebook/phonebook-selectors';
import { fetchContactsAction } from '../redux/phonebook/phonebook-operations';
import { useEffect } from 'react';
import ContactList from '../components/ContactsList/ContactList';
import ContactForm from '../components/ContactsForm/ContactForm';
import Filter from '../components/Filter/Filter';

export default function ContactsView(params) {
  const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(getLoading);

  useEffect(() => dispatch(fetchContactsAction()), [dispatch]);

  return (
    <div>
      <ContactForm />
      {/* <Filter /> */}
      <ContactList />
    </div>
  );
}
