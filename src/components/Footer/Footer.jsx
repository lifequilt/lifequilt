import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';

const logo = require('../../assets/backpack-supplies.JPG');
const styles = require('./Footer.css');

const Footer = () => (
  <footer className={styles.footer} >
    <Logo path={logo} />
    <Nav />
  </footer>
);

export default Footer;
