import { NavLink } from 'react-router-dom';
import styles from '../components/AppBar/AppBar.module.css';
import { Navbar, Nav } from 'react-bootstrap';

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
