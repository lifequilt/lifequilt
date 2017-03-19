import React from 'react';

const styles = require('./Section.css');

const Section = props => (
  <section className={styles.section} >
    {props.children}
  </section>
);

export default Section;
