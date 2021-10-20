import { Container } from './App.styled';
import { Switch } from 'react-router';
import HomeView from '../../view/HomeView';
import LoginView from '../../view/LoginView';
import RegisterView from '../../view/RegisterView';
import ContactsView from '../../view/ContactsView';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRouter';
import AppBar from '../AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Container>
    )
  );
}
