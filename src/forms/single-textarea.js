import React, { PropTypes } from 'react';

const SingleTextarea = props => (
  <div>
    <label htmlFor={props.title}>{props.title}</label>
    <textarea value={props.value} placeholder={props.title} onChange={e => props.onChange(props.stateKey, e)} />
  </div>
);

SingleTextarea.propTypes = {
  stateKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SingleTextarea;
