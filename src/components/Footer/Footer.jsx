import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';

const facebookButton = require('../../assets/facebook.jpeg');
const logo = require('../../assets/new-logo.jpg');
const styles = require('./Footer.css');

const Footer = () => (
  <footer className={styles.footer}>
    <Logo clasName={styles.footerLogo} path={logo} />
    <div>
      <Nav className={styles.footerNav} />
      <div className={styles.address}>
        <p>1335 S. Prairie Avenue  #2002</p>
        <p>Chicago, IL  60605-3435</p>
      </div>
    </div>
    <a href="https://www.facebook.com/LifeQuilt/" rel="noopener noreferrer" target="_blank"><img className={styles.fbButton} src={facebookButton} alt="Facebook button" /></a>
  </footer>
);

export default Footer;
