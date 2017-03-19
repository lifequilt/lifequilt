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

export default Partner;
