import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const styles = require('./Nav.css');

const Nav = props => (
  <nav className={styles.nav}>
    <Link to="/about" className={props.location.pathname === '/' ? styles.navItemActive : styles.navItem}>About</Link>
    <Link to="/participate" className={props.location.pathname === '/participate' ? styles.navItemActive : styles.navItem}>Get Involved</Link>
    <Link to="/blog" className={props.location.pathname === '/blog' ? styles.navItemActive : styles.navItem}>Blog</Link>
    <Link to="/donate" className={props.location.pathname === '/donate' ? styles.navItemActive : styles.navItem}>Donate</Link>
  </nav>
);

export default withRouter(Nav);
