import React from 'react';
import PropTypes from 'prop-types';
import  ReactJson from 'react-json-view';

const Display = ({ result }) => {
  console.log(result)
  return (
    <div>{
     
      <ReactJson src={result} />
    }
      
   </div>
  );
};

Display.propTypes = {
  result: PropTypes.object
};


export default Display;

