import React, { Component } from 'react';
import { UserForm } from '../../../forms/user-form';

export class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <UserForm
          userType="contact"
          history={this.props.history}
        />
      </div>
    );
  }
}

export default Contact;
