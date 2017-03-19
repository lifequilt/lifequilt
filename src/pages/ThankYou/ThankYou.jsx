import React, { Component } from 'react';

export class ThankYou extends Component {
  render() {
    const { userType } = this.props.location.state;
    return (
      <div>
        {userType === 'contact' ?
          <div>Thank you for your interest! We will get back to you shortly!</div> :
          <div>
            <h2>Thank you for signing up to {userType} with us!</h2>
            <p>We will get back to you shortly!</p>
          </div>
        }
      </div>
    );
  }
}

export default ThankYou;
