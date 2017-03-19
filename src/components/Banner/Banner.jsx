import React from 'react';

const styles = require('./Banner.css');

const Banner = props => (
  <div className={styles.banner} >
    {props.children}
  </div>
);

export default Banner;
