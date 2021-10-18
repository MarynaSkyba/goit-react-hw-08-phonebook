import { NavLink } from 'react-router-dom';
import styles from '../AppBar/AppBar.module.css';

const AppBar = () => (
  <nav className={styles.nav}>
    <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
      Главная страница
    </NavLink>
    <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
      Контакты
    </NavLink>
    <NavLink to="/register" className={styles.link} activeClassName={styles.activeLink}>
      Регистрация
    </NavLink>
    <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
      Логин
    </NavLink>
    <button type="button">Выйти</button>
  </nav>
);

export default AppBar;
