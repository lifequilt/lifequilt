import React, { PropTypes } from 'react';

const SingleInput = props => (
  <div>
    <label htmlFor={props.title}>{props.title}</label>
    <input value={props.value} placeholder={props.title} onChange={e => props.onChange(props.stateKey, e)} />
  </div>
);

SingleInput.propTypes = {
  stateKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SingleInput;
