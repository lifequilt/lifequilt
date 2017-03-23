import React, { Component } from 'react';
import { UserForm } from '../../../forms/user-form';

const styles = require('./Contact.css');

export class Contact extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.header}>Contact Form</h2>
          <UserForm
            userType="contact"
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
