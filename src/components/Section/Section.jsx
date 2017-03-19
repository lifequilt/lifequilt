import React from 'react';
import classnames from 'classnames';

const styles = require('./Section.css');

const Section = props => {
  const sectionClasses = classnames(styles.section, props.className);
  return (
    <section className={sectionClasses}>
      {props.children}
    </section>
  );
};

export default Section;
