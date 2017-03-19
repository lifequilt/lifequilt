import React, { Component } from 'react';
import { UserForm } from '../../../forms/user-form';

export class Volunteer extends Component {
  render() {
    console.log(this.props);
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
