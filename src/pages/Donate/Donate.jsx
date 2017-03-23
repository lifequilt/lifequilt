import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../../components/Banner';
import Section from '../../components/Section';
import DonateForm from './components/DonateForm';
import SupportCard from './components/SupportCard';

const amazonSmileImage = require('../../assets/amazon-smile.png');
const matchingImage = require('../../assets/matching-gifts.jpeg');
const raceImage = require('../../assets/race-pic.JPG');

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
        <Section className={styles.donateText}>
          <h2>Give the Gift of Educational Success</h2>
          <p>Helping young people go to and succeed in school is Life Quilt’s number one priority.</p>
          <p>Your donation will go directly toward sending the next generation of leaders to school by providing them the support and tools they need to succeed in their studies.</p>
          <p>Please donate to our programs today because learning can't wait.</p>
        </Section>
        <Section>
          <DonateForm />
        </Section>

        <div className={styles.supportContainer}>
          <div className={styles.supportHeader}>
            Other ways to support us:
          </div>
          <div className={styles.supportCardContainer}>
            <SupportCard
              supportImage={matchingImage}
              supportTitle="Matching Gifts"
              supportDescription="Many organizations support a matching gifts program that enables their employees to double their gifts to Life Quilt Foundation. To help Life Quilt receive a match to your gift, contact your Human Resources office to get your matching gift form or learn if your company provides online requests. Help us help our students in need."
            />
            <SupportCard
              supportImage={amazonSmileImage}
              supportTitle="Shop on Amazon Smile"
              supportDescription="Support Life Quilt Foundation by starting your shopping at smile.amazon.com"
            >
              <a className={styles.cardButton} href="https://smile.amazon.com/?ie=UTF8&ein=27-3621437">SHOP NOW</a>
            </SupportCard>
            <SupportCard
              supportImage={raceImage}
              supportTitle="Volunteer"
              supportDescription="Raising money to end hunger in Chicagoland in partnership with the Greater Chicago Food Depository and providing school supplies to hundreds of children as part of the Loretto Hospital Foundation Visit with Santa are two examples of how Life Quilt volunteers have partnered with others organizations to postively impact our neighborhoods."
            >
              <Link to="/participate/volunteer" className={styles.cardButton}>FIND OUT HOW</Link>
            </SupportCard>
          </div>
        </div>
        <Banner className={styles.Banner}>
          <Link to="/participate/contact" className={styles.donateLink}>Have something to donate?</Link>
        </Banner>
      </div>
    );
  }
}

export default Donate;
