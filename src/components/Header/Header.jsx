import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';

const logo = require('../../assets/logo.png');
const styles = require('./Header.css');

const Header = () => (
  <header className={styles.header}>
    <Logo path={logo} altText={'Logo Image'} />
    <div className={styles.HeaderList}>
      <Link to="/" className={styles.HeaderListItem}>Home</Link>
      <Link to="/participate" className={styles.HeaderListItem}>Get Involved</Link>
      <Link to="/donate" className={styles.HeaderListItem}>Donate</Link>
      <Link to="/blog" className={styles.HeaderListItem}>Blog</Link>
    </div>
  </header>
);

export default Header;
