import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';


const HistoryList = ({ history }) => {
  console.log(history)
  return history.map(result => (
    <>
    <h2>History</h2>
      <HistoryItem key ={ result.url + result.method }  {...result}/>
    </>
  ));

}
History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  }))
}

export default HistoryList;
