import React from 'react';

const ThankYou = props => (
  <div>
    <h2>Thank you for signing up to {props.location.state.userType} with us!</h2>
    <p>We will get back to you shortly!</p>
  </div>
);

export default ThankYou;
