import React, { Component } from 'react';
import logo from './logo.svg';
import { postDatabase } from './api/apiDatabase';

import { UserForm } from './forms/user-form';

class App extends Component {

  handleUserSubmit = () => {
    const newUser = {
      firstName: 'Bo',
      lastName: 'Johnson',
      phone: '513-680-8002',
    };

    const refName = '/users';
    const onFulfilled = snapshot => {
      console.log(snapshot.key);
      return snapshot.key;
    };
    const onRejected = error => console.log('database push failed', error);

    postDatabase({ jsonObject: newUser, refName }).then(onFulfilled).catch(onRejected);
  }

  render() {
    const styles = require('./App.css');
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserForm />
        <button onClick={this.handleUserSubmit}>Add user</button>
      </div>
    );
  }
}

export default App;
