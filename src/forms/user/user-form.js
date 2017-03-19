/* eslint-disable */

import React, { Component, PropTypes } from 'react';
<<<<<<< HEAD:src/forms/user-form.js
<<<<<<< HEAD
import { withRouter } from 'react-router';
=======
>>>>>>> forms and passing userTypes
import SingleInput from './single-input';
import { postDatabase } from '../api/apiDatabase';
=======
import SingleInput from '../single-input';
import { postDatabase } from '../../api/apiDatabase';
>>>>>>> Style volunteer form:src/forms/user/user-form.js

const FIELDS_ARRAY = [
  { stateKey: 'firstName', title: 'First Name' },
  { stateKey: 'lastName', title: 'Last Name' },
  { stateKey: 'email', title: 'Email' },
  { stateKey: 'phoneNumber', title: 'Phone Number' },
];

const styles = require('./user-form.css');

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

    this.props.history.push('../thankyou', {});
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
          <input className={styles.submitButton} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

UserForm.propTypes = {
  userType: PropTypes.string.isRequired,
<<<<<<< HEAD
  history: PropTypes.object.isRequired,
};

export default withRouter(UserForm);
=======
};

export default UserForm;
>>>>>>> forms and passing userTypes
