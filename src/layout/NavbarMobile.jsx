import styles from './NavbarMobile.module.css'

function Navbar() {
  return (
    <nav className={styles.navmobile}>
      <a href='/'><h1>LOGO</h1></a>
      <ul className={styles.list}>
        <li><a href="/">Home</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;