import React from 'react';
import { Link } from 'react-router-dom';

const styles = require('./Banner.css');

const Banner = props => (
  <Link to="/participate">
    <div className={styles.banner} >
      {props.children}
    </div>
  </Link>
);

export default Banner;
