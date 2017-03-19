import React, { Component } from 'react';
import { UserForm } from '../../../forms/user/user-form';

const styles = require('./Partner.css');

const phoenixImage = require('../../../assets/phoenix-library.png');
const uicImage = require('../../../assets/uic.png');
const lorettoImage = require('../../../assets/loretto-hospital.png');

export class Partner extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.header}>Partner</h2>
          <UserForm
            userType="partner"
            history={this.props.history}
          />
        </div>
        <div className={styles.sidebar}>
          <h2 className={styles.header}>We've Partnered With</h2>
          <img src={phoenixImage} className={styles.item} alt="Phoenix Library"/>
          <img src={uicImage} className={styles.item} alt="UIC"/>
          <img src={lorettoImage} className={styles.item} alt="Loretto Hospital"/>
        </div>
      </div>
    );
  }
}

export default Partner;
