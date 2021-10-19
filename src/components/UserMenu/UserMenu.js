import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { Button } from '../ContactsForm/ContactForm.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <span>Добро пожаловать, {name} </span>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </Button>
    </div>
  );
}
