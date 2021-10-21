import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
// import { Button } from '../ContactsForm/ContactForm.styled';
import { Navbar, Button, Nav } from 'react-bootstrap';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Navbar>
      <Nav.Link>Привет, {name} </Nav.Link>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </Button>
    </Navbar>
  );
}
