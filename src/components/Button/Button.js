import React from 'react';
import classnames from 'classnames';

const Button = ({
  children,
  className,
  disabled,
  primary,
  fullWidth,
  right,
  left,
  secondary,
  ...otherProps
}) => {
  const styles = require('./Button.css');

  const classes = classnames(styles.Button, {
    [styles.primary]: primary,
    [styles.disabled]: disabled,
    [styles.secondary]: secondary,
    [styles.fullWidth]: fullWidth,
    [styles.right]: right,
    [styles.left]: left,
  }, className);

  const buttonProps = {
    className: classes,
    ...otherProps,
  };

  return (
    <div {...buttonProps}>{children}</div>
  );
};

export default Button;
