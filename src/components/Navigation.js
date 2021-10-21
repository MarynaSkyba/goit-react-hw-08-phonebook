import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import styles from '../components/AppBar/AppBar.module.css';
import authSelectors from '../redux/auth/auth-selectors';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar>
      <Nav>
        <Nav.Link
          exact
          href="/"
          //  className={styles.link} activeClassName={styles.activeLink}
        >
          Главная страница
        </Nav.Link>
        {isLoggedIn && (
          <Nav.Link
            href="/contacts"
            // className={styles.link} activeClassName={styles.activeLink}
          >
            Контакты
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
