import React from 'react';
import classnames from 'classnames';

const styles = require('./Banner.css');

const Banner = props => {
  const bannerClasses = classnames(styles.banner, props.className);

  return (
    <div className={bannerClasses} >
      {props.children}
    </div>
  );
};

export default Banner;
