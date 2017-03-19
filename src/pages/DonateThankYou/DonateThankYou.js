import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class DonateThankYou extends Component {
  render() {
    const styles = require('./DonateThankYou.css');
    return (
      <div>
        <div className={styles.thanksHeader}>Thanks For Your Contribution</div>
        <div className={styles.thanksSubheader}>You will be receiving a receipt via email shortly.</div>
        <div className={styles.thanksContent}>
          <p>On behalf Life Quilt Foundation, thank you for your generous gift.</p>
          <p>Recent data from the national KIDS COUNT program shows that over 200,000 children in Chicago are living in poverty.  Please know that your thoughtful support has allowed Life Quilt to reach hundreds of those children.</p>
          <p>Our mission to help bring resources to those in need is greatly helped by caring individuals like you.</p>
          <p>Thank you again for your support.  It is truly appreciated.  Please join us on Facebook to stay in touch with all the Life Quilt is doing to stitch together resources to support the community.</p>
          <p>If you have any questions, please email us at <Link to="mailto:administrator@lifequilt.org">administrator@lifequilt.org</Link></p>
        </div>
      </div>
    );
  }
}

export default DonateThankYou;
