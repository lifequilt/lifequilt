import React from 'react';

const styles = require('./NavItem.css');

const NavItem = props => (
  <a className={styles.navItem} href="">{props.title}</a>
);

export default NavItem;
