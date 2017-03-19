import React, { Component } from 'react';
import { UserForm } from '../../../forms/user-form';

export class Volunteer extends Component {
  render() {
    return (
      <div>
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
