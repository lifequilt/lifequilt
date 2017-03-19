import React from 'react';

const SupportCard = props => {
  const styles = require('./SupportCard.css');

  return (
    <div className={styles.SupportCard}>
      <img alt="Support" className={styles.SupportImage} src={props.supportImage} />
      <div className={styles.SupportTitle}>
        {props.supportTitle}
      </div>
      <div className={styles.SupportDescription}>
        {props.supportDescription}
      </div>
      {props.children}
    </div>
  );
};

export default SupportCard;
