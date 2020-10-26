import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css'
const HistoryItem = ({ url, method }) => (
  <section className={styles.HistoryItem}>
    <p>Method: {method}</p>
    <p>  Url: {url}</p>
  </section>
);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryItem;
