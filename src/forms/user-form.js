/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import SingleInput from './single-input';
import { postDatabase } from '../api/apiDatabase';

const FIELDS_ARRAY = [
  { stateKey: 'firstName', title: 'First Name' },
  { stateKey: 'lastName', title: 'Last Name' },
  { stateKey: 'email', title: 'Email' },
  { stateKey: 'phoneNumber', title: 'Phone Number' },
];

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(key, event) {
    const newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  }
  handleSubmit(e) {
    e.preventDefault();

    const refName = '/users';
    const onFulfilled = snapshot => {
      console.log(snapshot.key);
      return snapshot.key;
    };
    const onRejected = error => console.log('Errors: ', error);

    const userObject = Object.assign(this.state, {'userType': this.props.userType});

    postDatabase({ jsonObject: userObject, refName })
      .then(onFulfilled)
      .catch(onRejected);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {FIELDS_ARRAY.map(field =>
            <SingleInput
              key={field.stateKey}
              stateKey={field.stateKey}
              onChange={this.onChange}
              value={this.state[field.stateKey]}
              title={field.title}
            />
          )}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

UserForm.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default UserForm;
