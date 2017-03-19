import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';

const facebookButton = require('../../assets/facebook.jpeg');
const logo = require('../../assets/logo.png');
const styles = require('./Footer.css');

const Footer = () => (
  <footer className={styles.footer}>
    <Logo clasName={styles.footerLogo} path={logo} />
    <Nav className={styles.footerNav} />
    <a href="https://www.facebook.com/LifeQuilt/" target="_blank"><img className={styles.fbButton} src={facebookButton} alt="Facebook button" /></a>
  </footer>
);

export default Footer;
