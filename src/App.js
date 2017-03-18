import React, { Component } from 'react';
import Home from './pages/Home';

import { postDatabase } from './api/apiDatabase';

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
        <Home />
        <button onClick={this.handleUserSubmit}>Add user</button>
      </div>
    );
  }
}

export default App;
