import React, { Component } from 'react';
import Controller from '../components/controller/Controller';
import  fetchApi  from '../services/fetch-api';





export default class Resty extends Component {
  state = {
    
    url: '',
    text: '',
    method: '',
    history: []
   
  }
  handleChange= ({ target })=> {
    this.setState({ [target.name]: target.value });
    
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetchApi({
      url: this.state.url,
      method: this.state.method
    })
    .then(this.setState(state => ({
      history: [
        ...state.history,
        { url: state.url, method: state.method }

      ]
    })))
    
    
  };
;

render() {
  const { url, text, method} = this.state

  return (
    <>
    <Controller 
    text ={text}
    url = {url}
    method = {method}
    onChange={this.handleChange} 
    onSubmit={this.handleSubmit}
    />
    </>


);

}
};


