<<<<<<< HEAD
import React, { Component } from 'react';
import { UserForm } from '../../../forms/user-form';

export class Partner extends Component {
  render() {
    return (
      <div>
        <h2>Partner</h2>
        <UserForm
          userType="partner"
          history={this.props.history}
        />
      </div>
    );
  }
}
=======
import React from 'react';
import { UserForm } from '../../../forms/user/user-form';

const Partner = () => (
  <div>
    <h2>Partner</h2>
    <UserForm userType="partner" />
  </div>
);
>>>>>>> forms and passing userTypes

export default Partner;
