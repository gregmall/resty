import React from 'react';
import PropTypes from 'prop-types';
import styles from  './Controller.css'

const Controller = ({
  url,
  text,
  method,
  onChange,
  onSubmit,
  
}) => (

  <form onSubmit={onSubmit} >
  
    <label htmlFor="url">ENTER URL</label>
    <input
    
      className={styles.url}
      id="url"
      type="url"
      name="url"
      placeHolder="Type URL here"
      value={url}
      onChange={onChange}
   
    /><br />
    <label htmlFor="method">GET</label>
    <input
      id="method"
      type="radio"
      name="method"
      value="GET"
      checked={method === 'GET'}
      onChange={onChange}
    />
     <label htmlFor="method">POST</label>
    <input
      id="method"
      type="radio"
      name="method"
      value="POST"
      checked={method === 'POST'}
      onChange={onChange}
    />
     <label htmlFor="method">DELETE</label>
    <input
      id="method"
      type="radio"
      name="method"
      value="DELETE"
      checked={method === 'DELETE'}
      onChange={onChange}
    />
     <label htmlFor="method">PUT</label>
    <input
      id="method"
      type="radio"
      name="method"
      value="PUT"
      checked={method === 'PUT'}
      onChange={onChange}
    />
    <button type="submit" data-testid="submit">SUBMIT</button><br />
    
  <textarea
      placeHolder="Enter Raw JSON Body"
      className="text"
      id="text"
      type="textarea"
      name="text"
      value={text}
      onChange={onChange}
   
    /><br />
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
