import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../../components/Banner';
import Section from '../../components/Section';

const volunteerImage = require('../../assets/volunteer.jpeg');
const partnerImage = require('../../assets/partner.jpeg');
const contactImage = require('../../assets/contact.jpeg');
const styles = require('./Participate.css');

const Participate = () => (
  <div>
    <div className={styles.main}>
      <Section>
        <img src={volunteerImage} alt="pic" />
        <Link to="/volunteer" className={styles.button}>VOLUNTEER</Link>
      </Section>
      <Section>
        <img src={partnerImage} alt="pic" />
        <Link to="/partner" className={styles.button}>PARTNER</Link>
      </Section>
      <Section>
        <img src={contactImage} alt="pic" />
        <Link to="/contact" className={styles.button}>HAVE A QUESTION?</Link>
      </Section>
    </div>
    <Banner>
      <h3>Donate!</h3>
    </Banner>
  </div>
);

export default Participate;
