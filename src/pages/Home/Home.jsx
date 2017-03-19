import React from 'react';

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
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
          Lorem ipsum dolor sit amet, ne modus lobortis persequeris pro, dicat ullamcorper ut qui, his insolens dissentiunt ut. Ex inimicus signiferumque nec, sint posse dictas an duo. Has ex quando perfecto reprehendunt.
        </p>
      </Section>
      <Section>
        <img src={clothingImage} alt="Winter clothing" />
        <p>
          Lorem ipsum dolor sit amet, ne modus lobortis persequeris pro, dicat ullamcorper ut qui, his insolens dissentiunt ut. Ex inimicus signiferumque nec, sint posse dictas an duo. Has ex quando perfecto reprehendunt.
        </p>
      </Section>
      <Section>
        <img src={rocketImage} alt="School supplies" />
        <p>
          Lorem ipsum dolor sit amet, ne modus lobortis persequeris pro, dicat ullamcorper ut qui, his insolens dissentiunt ut. Ex inimicus signiferumque nec, sint posse dictas an duo. Has ex quando perfecto reprehendunt.
        </p>
      </Section>
    </div>
    <Banner>
      <h3>Help us out! Donate!</h3>
    </Banner>
    <Footer />
  </div>
);

export default Home;
