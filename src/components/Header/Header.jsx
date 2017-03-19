import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import Nav from '../Nav';

const logo = require('../../assets/new-logo.jpg');
const styles = require('./Header.css');

const Header = () => (
  <header className={styles.header}>
    <Link to="/"><Logo path={logo} altText={'Logo Image'} /></Link>
    <Nav />
  </header>
);

export default Header;
