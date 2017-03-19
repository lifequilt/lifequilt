import React from 'react';
import { Link } from 'react-router-dom';

const styles = require('./Nav.css');

const Nav = () => (
  <nav className={styles.nav}>
    <Link to="/about" className={styles.navItem}>About</Link>
    <Link to="/participate" className={styles.navItem}>Get Involved</Link>
    <Link to="/blog" className={styles.navItem}>Blog</Link>
    <Link to="/donate" className={styles.navItem}>Donate</Link>
  </nav>
);

export default Nav;
