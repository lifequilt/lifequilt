import React, { Component } from 'react';
import { UserForm } from '../../../forms/user/user-form';

const styles = require('./Volunteer.css');

export class Volunteer extends Component {
  render() {
    return (
      <div className={styles.containerForm}>
        <h2>Volunteer</h2>
        <UserForm
          userType="volunteer"
          history={this.props.history}
        />
      </div>
    );
  }
}

export default Volunteer;
