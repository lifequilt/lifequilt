import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';

const logo = require('../../assets/logo.png');
const styles = require('./Footer.css');

const Footer = () => (
  <footer className={styles.footer} >
    <Logo clasName={styles.footerLogo} path={logo} />
    <Nav className={styles.footerNav} />
    <section>
      <p>administrator@lifequilt.org</p>
      <p>(708) 824-8336</p>
      <p>1335 S Prairie Avenue Chicago, IL 60605</p>
    </section>
  </footer>
);

export default Footer;
