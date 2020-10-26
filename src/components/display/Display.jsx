import React from 'react';
import PropTypes from 'prop-types';
import  ReactJson from 'react-json-view';

const Display = ({ result }) => {
  
  return (
    <div data-testid="display">{
     
      <ReactJson  src={result} />
    }
      
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.object
};

export default Display;

