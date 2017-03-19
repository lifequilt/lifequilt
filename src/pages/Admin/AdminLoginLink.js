import React, { Component } from 'react';
import { apiAuth } from '../../api/apiDatabase';

const styles = require('./AdminLoginLink.css');

class AdminLoginLink extends Component {
  adminClick(event) {
    event.preventDefault();
    apiAuth();
  }

  render() {
    return (
      <div className={styles.container}>
        <p>If you have been previously registered as an administrator, clicking this button
        will enable you to post blogs.</p>
        <button href="" onClick={this.adminClick.bind(this)} className={styles.adminButton}>Admin</button>
      </div>
    );
  }
}

export default AdminLoginLink;
