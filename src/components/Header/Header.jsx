import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';

const logo = require('../../assets/logo.png');
const styles = require('./Header.css');

const Header = () => (
  <header className={styles.header}>
    <Logo path={logo} altText={'Logo Image'} />
    <Nav />
  </header>
);

export default Header;
