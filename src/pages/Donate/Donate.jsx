import React, { Component } from 'react';

import Section from '../../components/Section';
import DonateForm from './components/DonateForm';
import SupportCard from './components/SupportCard';

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    const styles = require('./Donate.css');

    return (
      <div className={styles.DonatePage}>
        <Section>
          <DonateForm />
        </Section>

        <div className={styles.supportContainer}>
          <div className={styles.supportHeader}>
            Other ways to support us:
          </div>
          <div className={styles.supportCardContainer}>
            <SupportCard
              supportImage="/public/backpack-pic.jpg"
              supportTitle="Matching Gift"
              supportDescription="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
            />
            <SupportCard
              supportImage="/public/backpack-pic.jpg"
              supportTitle="Amazon Smile"
              supportDescription="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
            />
            <SupportCard
              supportImage="/public/backpack-pic.jpg"
              supportTitle="Follow on Facebook"
              supportDescription="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
            />
          </div>
        </div>

        <Section>
          Donate Wish List
        </Section>
      </div>
    );
  }
}

export default Donate;
