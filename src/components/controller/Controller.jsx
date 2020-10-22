import React from 'react';
import PropTypes from 'prop-types';

const Controller = ({
  url,
  text,
 
  onChange,
  onSubmit,
  
  

}) => (

  <form onSubmit={onSubmit}>
  <label htmlFor="url">ENTER URL</label>
  <input
    id="text"
    type="text"
    name="url"
    value={url}
    onChange={onChange}
   
    />
    <label htmlFor="method">GET</label>
    <input
    id="method"
    type="radio"
    name="method"
    value='GET'
    onChange={onChange}
    />
     <label htmlFor="method">POST</label>
    <input
    id="method"
    type="radio"
    name="method"
    value='POST'
    onChange={onChange}
    />
     <label htmlFor="method">DELETE</label>
    <input
    id="method"
    type="radio"
    name="method"
    value='DELETE'
    onChange={onChange}
    />
     <label htmlFor="method">PUT</label>
    <input
    id="method"
    type="radio"
    name="method"
    value='PUT'
    onChange={onChange}
    />
    <label htmlFor="url">enter json</label>
  <input
    id="text"
    type="text"
    name="text"
    value={text}
    onChange={onChange}
   
    />
    
    <button type="submit">SUBMIT</button>

</form>

);
Controller.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default Controller;
