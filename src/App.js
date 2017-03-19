import React, { Component } from 'react';

import AdminLoginLink from './components/AdminLoginLink';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

import { postDatabase, apiAuth } from './api/apiDatabase';
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

  handleAdminClick(event) {
    event.preventDefault();
    apiAuth();
  }

  render() {
    const styles = require('./App.css');
    return (
      <div className={styles.App}>
        <Home />
      </div>
    );
  }
}

export default App;
