import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from '../components/AppBar/AppBar.module.css';
import authSelectors from '../redux/auth/auth-selectors';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar>
      <Nav>
        <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
          Главная страница
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
            Контакты
          </NavLink>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
