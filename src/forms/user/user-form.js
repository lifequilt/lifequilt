/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import SingleInput from '../single-input';
import { postDatabase } from '../../api/apiDatabase';

const FIELDS_ARRAY = [
  { stateKey: 'firstName', title: 'First Name' },
  { stateKey: 'lastName', title: 'Last Name' },
  { stateKey: 'email', title: 'Email' },
  { stateKey: 'phoneNumber', title: 'Phone Number' },
  { stateKey: 'organizationName', title: 'Organization Name' },
  { stateKey: 'comment', title: 'Comment', type: 'textarea'},
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
      organizationName: '',
      comment: '',
    };
  }

  onChange = (key, event) => {
    const newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props;

    const refName = '/users';

    const onFulfilled = snapshot => snapshot.key;

    const onRejected = error => console.log('Errors: ', error);

    const userObject = Object.assign(this.state, {'userType': this.props.userType});

    postDatabase({ jsonObject: userObject, refName })
      .then(onFulfilled)
      .catch(onRejected);

    history.push('../thankyou', {});
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
              textarea={field.type === 'textarea'}
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
  history: PropTypes.object.isRequired,
};

export default withRouter(UserForm);

