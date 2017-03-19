import React from 'react';

import Banner from '../../components/Banner';
import Section from '../../components/Section';

const homepageBanner = require('../../assets/homepageBanner_text.jpg');
const rocketImage = require('../../assets/rocket_pencils.jpeg');
const clothingImage = require('../../assets/winter_clothing.jpeg');
const parentImage = require('../../assets/parent_reading.jpeg');
const styles = require('./Home.css');

const Home = () => (
  <div>
    <img className={styles.homepageBanner} src={homepageBanner} alt="Banner" />
    <div className={styles.main}>
      <Section>
        <img src={parentImage} alt="Parent reading to child" />
        <p>
          Life Quilt is committed to breaking the barriers to education caused by poverty and lack of funds.
        </p>
      </Section>
      <Section>
        <img src={clothingImage} alt="Winter clothing" />
        <p>
          In partnership with other organizations, we provide school supplies, winter clothing and food to students in need.
        </p>
      </Section>
      <Section>
        <img src={rocketImage} alt="School supplies" />
        <p>
          We believe that parents and guardians are a child’s first teacher and Life Quilt works to provide resources they need to nurture the child’s successful academic career.
        </p>
      </Section>
    </div>
    <Banner>
      <h3>Help us out! Donate!</h3>
    </Banner>
  </div>
);

export default Home;
