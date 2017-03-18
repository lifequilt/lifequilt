import React from 'react';

import NavItem from './components/NavItem';

const Nav = () => (
  <nav>
    <NavItem title={'Home'} />
    <NavItem title={'About'} />
    <NavItem title={'Get Involved'} />
    <NavItem title={'Contact'} />
    <NavItem title={'Donate'} />
  </nav>
);

export default Nav;
