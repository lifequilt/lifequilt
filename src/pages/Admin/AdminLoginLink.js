import React, { Component } from 'react';
import * as firebase from 'firebase';

import Button from '../../components/Button';
import SingleInput from '../../forms/single-input';

const styles = require('./AdminLoginLink.css');

const FIELDS_ARRAY = [
  { stateKey: 'email', title: 'Email' },
  { stateKey: 'password', title: 'Password' },
];

class AdminLoginLink extends Component {
  constructor() {
    super();
    this.state = {
      error: {},
      authorized: false,
      accessToken: '',
      email: '',
      password: '',
    };
  }

  onChange = (key, event) => {
    const newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  }

  adminClick = event => {
    event.preventDefault();

    const {
      email,
      password,
    } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          authorized: true,
        });
      })
      .catch(error => this.setState({ error, authorized: false }));
  }

  render() {
    const {
      authorized,
    } = this.state;

    const adminButtonProps = {
      onClick: this.adminClick,
      primary: true,
      className: styles.downloadButton,
    };

    const downloadPeopleProps = {
      primary: true,
      className: styles.downloadButton,
    };

    const downloadButton = authorized ? (
      <a href={'https://lifequilt-46fd7.firebaseio.com/users.json?download=myfilename.csv&print=pretty'} download >
        <Button {...downloadPeopleProps}>
          Download Stuff
        </Button>
      </a>
    ) : null;

    return (
      <div className={styles.container}>
        <p>Please authenticate to enable the ability to download contacts, donors, etc.</p>
        {FIELDS_ARRAY.map(field =>
          <SingleInput
            key={field.stateKey}
            stateKey={field.stateKey}
            onChange={this.onChange}
            value={this.state[field.stateKey]}
            title={field.title}
            type={field.title === 'Password' ? 'password' : 'text'}
          />
        )}
        <Button {...adminButtonProps}>Authenticate</Button>
        {downloadButton}
      </div>
    );
  }
}

export default AdminLoginLink;
