import ContactList from '../ContactsList/ContactList';
import ContactForm from '../ContactsForm/ContactForm';
import Filter from '../Filter/Filter';
import { Title } from '../App/App.styled';

export default function App() {
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
