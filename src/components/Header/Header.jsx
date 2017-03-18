import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';

const logo = require('../../assets/backpack-supplies.JPG');

const Header = () => (
  <header>
    <h1>Life Quilt Foundation</h1>
    <Logo path={logo} altText={'Logo Image'} />
    <Nav />
  </header>
);

export default Header;
