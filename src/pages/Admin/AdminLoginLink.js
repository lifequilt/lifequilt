import React, { Component } from 'react';
import * as firebase from 'firebase';
import { CSVLink, CSVDownload } from 'react-csv';

import getDatabase from '../../api/apiDatabase/getDatabase';

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
      email: '',
      password: '',
      users: {},
      user: null,
    };
  }

  componentWillMount() {
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user, authorized: !!user });
    });
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
        getDatabase('/users').on('value', snapshot => {
          this.setState({ users: snapshot.val(), authorized: true });
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error, authorized: false });
      });
  }

  render() {
    const {
      authorized,
      users,
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

    const csvData = Object.values(users);

    const csvLinkProps = {
      filename: 'lifequiltinfo.csv',
      data: csvData,
      className: styles.csvLink,
    };

    const downloadButton = authorized ? (
      <Button {...downloadPeopleProps}>
        <CSVLink {...csvLinkProps} >Download CSV</CSVLink>
      </Button>
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
