import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../components/AppBar/AppBar.module.css';

export default function AuthNav() {
  return (
    <Navbar>
      <Nav>
        <NavLink to="/register" className={styles.link} activeClassName={styles.activeLink}>
          Регистрация
        </NavLink>
        <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
          Войти
        </NavLink>
      </Nav>
    </Navbar>
  );
}
