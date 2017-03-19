import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../../components/Banner';
import Section from '../../components/Section';
import DonateForm from './components/DonateForm';
import SupportCard from './components/SupportCard';

const amazonSmileImage = require('../../assets/amazon-smile.png');
const backpackImage = require('../../assets/backpack-pic.jpg');
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
        <Section>
          <DonateForm />
        </Section>

        <div className={styles.supportContainer}>
          <div className={styles.supportHeader}>
            Other ways to support us:
          </div>
          <div className={styles.supportCardContainer}>
            <SupportCard
              supportImage={backpackImage}
              supportTitle="Matching Gift"
              supportDescription="Many organizations support a matching gifts program that enables their employees to double or triple their gifts to Life Quilt Foundation. Your gift to Life Quilt Foundation can be matched by an equal or larger gift from your company. It is a real win-win for you, your employer and the students served by Life Quilt. To help Life Quilt Foundation receive a match to your gift, contact your Human Resources office to get your matching gift form or to learn if your company provides online requests. Help us help our students in need."
            />
            <SupportCard
              supportImage={amazonSmileImage}
              supportTitle="Shop on Amazon Smile"
              supportDescription="Support Life Quilt Foundation by starting your shopping at smile.amazon.com"
            />
            <SupportCard
              supportImage={raceImage}
              supportTitle="Volunteer"
              supportDescription="Delivering school supplies to children at the Loretto Hospital Foundation’s Visit With Santa, serving a holiday meal to over 200 hungry residents of Ford Heights IL, are two ways our volunteers have served the community. Expect to be challenged and inspired."
            />
          </div>
        </div>
        <Banner className={styles.donateBanner}>
          <Link to="/contact">
            <h3>Have something to donate?</h3>
          </Link>
        </Banner>
      </div>
    );
  }
}

export default Donate;
