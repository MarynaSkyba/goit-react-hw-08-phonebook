import { NavLink } from 'react-router-dom';
import styles from '../components/AppBar/AppBar.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
      Главная страница
    </NavLink>
    <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
