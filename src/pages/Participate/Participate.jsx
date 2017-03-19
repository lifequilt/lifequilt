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
      <Section className={styles.partSection}>
        <Link to="/participate/volunteer">
          <img src={volunteerImage} alt="pic" />
          <div className={styles.button}>
            VOLUNTEER
          </div>
        </Link>
      </Section>
      <Section className={styles.partSection}>
        <Link to="/participate/partner">
          <img src={partnerImage} alt="pic" />
          <div className={styles.button}>
            PARTNER
          </div>
        </Link>
      </Section>
      <Section className={styles.partSection}>
        <Link to="/participate/contact">
          <img src={contactImage} alt="pic" />
          <div className={styles.button}>
            HAVE A QUESTION?
          </div>
        </Link>
      </Section>
    </div>
    <Banner className={styles.Banner}>
      <Link to="/donate" className={styles.donateLink}>Donate!</Link>
    </Banner>
  </div>
);

export default Participate;
