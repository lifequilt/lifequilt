import React from 'react';

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const homepageBanner = require('../../assets/homepageBanner.jpg');
const image1 = require('../../assets/king-quote.jpg');
const image2 = require('../../assets/king-quote.jpg');
const image3 = require('../../assets/king-quote.jpg');
const styles = require('./Home.css');

const Home = () => (
  <div>
    <img className={styles.homepageBanner} src={homepageBanner} alt="Banner" />
    <div className={styles.main}>
      <Section>
        <img src={image1} alt="pic" />
        <p>
          Lorem ipsum dolor sit amet, ne modus lobortis persequeris pro, dicat ullamcorper ut qui, his insolens dissentiunt ut. Ex inimicus signiferumque nec, sint posse dictas an duo. Has ex quando perfecto reprehendunt.
        </p>
      </Section>
      <Section>
        <img src={image2} alt="pic" />
        <p>
          Lorem ipsum dolor sit amet, ne modus lobortis persequeris pro, dicat ullamcorper ut qui, his insolens dissentiunt ut. Ex inimicus signiferumque nec, sint posse dictas an duo. Has ex quando perfecto reprehendunt.
        </p>
      </Section>
      <Section>
        <img src={image3} alt="pic" />
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
