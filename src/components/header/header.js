import Login from "./login";
import Search from "./search";
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Spotify Search</h1>
      <Login />
      <Search />
    </header>
  );
};

export default Header;
