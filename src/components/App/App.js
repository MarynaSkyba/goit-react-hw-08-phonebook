import ContactList from '../ContactsList/ContactList';
import ContactForm from '../ContactsForm/ContactForm';
import Filter from '../Filter/Filter';
import { Title, Container } from '../App/App.styled';
import { Route, Switch } from 'react-router';
import HomeView from '../../view/HomeView';
import LoginView from '../../view/LoginView';
import RegisterView from '../../view/RegisterView';
import AppBar from '../AppBar/AppBar';

export default function App() {
  return (
    <div>
      <Container>
        <AppBar />
      </Container>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        {/* <Route path = "/contacts" component={ContactsView} /> */}
      </Switch>

      {/* <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList /> */}
    </div>
  );
}
