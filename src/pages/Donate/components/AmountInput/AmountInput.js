import React, { PropTypes } from 'react';

const AmountInput = props => {
  const styles = require('./AmountInput.css');

  return (
    <div>
      <div className={props.checked ? styles.inputEnabled : styles.inputDisabled} value={props.value} onClick={() => props.onChange(props.stateKey, props.value)}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.subtitle}>{props.subtitle}</span>
      </div>
    </div>
  );
};

AmountInput.propTypes = {
  stateKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default AmountInput;
