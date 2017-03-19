import React from 'react';

import NavItem from './components/NavItem';

const styles = require('./Nav.css');

const Nav = () => (
  <nav className={styles.nav} >
    <NavItem title={'About'} />
    <NavItem title={'Get Involved'} />
    <NavItem title={'Donate'} />
  </nav>
);

export default Nav;
