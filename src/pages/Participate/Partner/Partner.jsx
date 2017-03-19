import React, { Component } from 'react';
import { UserForm } from '../../../forms/user/user-form';

const styles = require('./Partner.css');

export class Partner extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <h2>Partner</h2>
          <UserForm
            userType="partner"
            history={this.props.history}
          />
        </div>
        <div className={styles.sidebar}>
          <h2>This is sidebar content.</h2>
          <p>Picture Here</p>
          <p>Picture Here</p>
          <p>Picture Here</p>
        </div>
      </div>
    );
  }
}

export default Partner;
