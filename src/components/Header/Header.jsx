import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';


const logo = require('../../assets/backpack-supplies.JPG');
const styles = require('./Header.css');

const Header = () => (
  <header>
    <h1>Life Quilt Foundation</h1>
    <Logo path={logo} altText={'Logo Image'} />
    <ul className={styles.HeaderList}>
      <li><Link to="/" className={styles.HeaderListItem}>Home</Link></li>
      <li><Link to="/participate" className={styles.HeaderListItem}>Get Involved</Link></li>
      <li><Link to="/donate" className={styles.HeaderListItem}>Donate</Link></li>
      <li><Link to="/blog" className={styles.HeaderListItem}>Blog</Link></li>
    </ul>
  </header>
);

export default Header;
