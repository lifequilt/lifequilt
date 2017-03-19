import React, { PropTypes } from 'react';

const AmountInput = props => (
  <div>
    <input type="radio" checked={props.checked} value={props.value} placeholder={props.title} onChange={e => props.onChange(props.stateKey, e)} />
    <label htmlFor={props.title}>{props.title}</label>
  </div>
);

AmountInput.propTypes = {
  stateKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default AmountInput;
