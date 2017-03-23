import React, { Component } from 'react';
import { UserForm } from '../../../forms/user/user-form';

const styles = require('./Volunteer.css');

export class Volunteer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.containerForm}>
          <h2 className={styles.header}>Volunteer Form</h2>
          <UserForm
            userType="volunteer"
            history={this.props.history}
          />
        </div>
        <div className={styles.sidebar}>
          <h2 className={styles.header}>Guest Bloggers</h2>
          <p>Do you have experience teaching or mentoring children? Have you personally seen the positive impact of a parent being a child’s first teacher? </p>
          <p>Life Quilt is looking for guest bloggers who can share their experiences through short blog posts that help educate parents on steps they can take to reinforce their child’s academic success.</p>

          <h2 className={styles.header}>Individual and Personal Group Volunteers</h2>
          <p>From participating in the annual Greater Chicago Food Depository Hunger Walk to helping children find their voice at the Phoenix, Illinois Family Reading Night, Life Quilt volunteers have the priviledge of serving in the community in a number of ways. </p>

          <h2 className={styles.header}>Corporate Volunteerism</h2>
          <p>Corporations rely on team building to strengthen relationships and to improve productivity.  Corporate volunteerism embraces these tenets while also helping our communities thrive.</p>
          <p>Give your employees the sense of comradery and life-satisfaction that comes from sharing their time and talents with those less fortunate.</p>
          <p>Apply to partner with LifeQuilt on our next community outreach project and strengthen your team’s relationships at the same time.</p>
        </div>
      </div>
    );
  }
}

export default Volunteer;
