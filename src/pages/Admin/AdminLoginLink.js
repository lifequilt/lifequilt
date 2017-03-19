import React, { Component } from 'react';
import styles from './AdminLoginLink.css';
import { apiAuth } from '../../api/apiDatabase';

class AdminLoginLink extends Component {
  adminClick(event) {
    event.preventDefault();
    apiAuth();
  }

  render() {
    return (
      <div>
        <p>If you have been previously registered as an administrator, clicking this button
        will enable you to post blogs.</p>
        <button href="" onClick={this.adminClick.bind(this)} className={styles.adminButton}>Admin</button>
      </div>
    );
  }
}

// const AdminLoginLink = ({ adminClick }) => (
//
//   <button href="" onClick={this.adminClick} className={styles.adminButton}>Admin</button>
// );

export default AdminLoginLink;
