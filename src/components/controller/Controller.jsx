import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controller.css'

const Controller = ({
  url,
  text,
  onChange,
  onSubmit,
  
  

}) => (

  <form onSubmit={onSubmit} className={styles.Controller}>
  <label htmlFor="url">ENTER URL</label>
  <input
    className="url"
    id="url"
    type="url"
    name="url"
    value={url}
    onChange={onChange}
   
    /><br />
    <label htmlFor="method">GET</label>
    <input
    id="method"
    type="radio"
    name="method"
    value='GET'
    onChange={onChange}
    /><br />
     <label htmlFor="method">POST</label>
    <input
    id="method"
    type="radio"
    name="method"
    value='POST'
    onChange={onChange}
    /><br />
     <label htmlFor="method">DELETE</label>
    <input
    id="method"
    type="radio"
    name="method"
    value='DELETE'
    onChange={onChange}
    /><br />
     <label htmlFor="method">PUT</label>
    <input
    id="method"
    type="radio"
    name="method"
    value='PUT'
    onChange={onChange}
    /><br />
    <label htmlFor="text">enter json</label>
  <textarea
    className="text"
    id="text"
    type="textarea"
    name="text"
    value={text}
    onChange={onChange}
   
    /><br />
    
    <button type="submit">SUBMIT</button>

</form>

);
Controller.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default Controller;
