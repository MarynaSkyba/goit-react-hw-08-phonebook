import ContactList from './contactsList/ContactList';
import ContactForm from './contactsForm/ContactForm';
import Filter from './filter/Filter';
import { Title } from './App/Title.styled';

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
