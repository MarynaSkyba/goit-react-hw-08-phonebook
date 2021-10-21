import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { Navbar } from 'react-bootstrap';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Navbar>
      <p className="greetings">Добро пожаловать, {name} </p>
      <button className="btn-logout" type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </Navbar>
  );
}
