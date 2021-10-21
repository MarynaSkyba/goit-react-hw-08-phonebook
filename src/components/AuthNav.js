import { NavLink } from 'react-router-dom';
// import styles from '../components/AppBar/AppBar.module.css';
import { Navbar, Nav } from 'react-bootstrap';

export default function AuthNav() {
  return (
    <Navbar>
      <Nav>
        <Nav.Link
          href="/register"
          // className={styles.link} activeClassName={styles.activeLink}
        >
          Регистрация
        </Nav.Link>
        <Nav.Link
          href="/login"
          //  className={styles.link} activeClassName={styles.activeLink}
        >
          Логин
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
