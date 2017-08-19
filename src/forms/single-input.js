import React, { PropTypes } from 'react';

const styles = require('./forms.css');

const SingleInput = props => {
  if (props.textarea) {
    return (
      <div className={styles.textInput}>
        <label htmlFor={props.title}>{props.title}{props.required ? ' *' : null}</label>
        <textarea rows="4" type={props.type} value={props.value} placeholder={props.title} onChange={e => props.onChange(props.stateKey, e)} />
      </div>
    );
  }
  return (
    <div className={styles.singleInput}>
      <label htmlFor={props.title}>{props.title}{props.required ? ' *' : null}</label>
      <input type={props.type} value={props.value} placeholder={props.title} onChange={e => props.onChange(props.stateKey, e)} />
    </div>
  );
};

SingleInput.propTypes = {
  stateKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default SingleInput;
