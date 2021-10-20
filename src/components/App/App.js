import { Container } from './App.styled';
import { Route, Switch } from 'react-router';
import HomeView from '../../view/HomeView';
import LoginView from '../../view/LoginView';
import RegisterView from '../../view/RegisterView';
import ContactsView from '../../view/ContactsView';
import AppBar from '../AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <AppBar />
      </Container>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>

      {/* <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList /> */}
    </div>
  );
}
