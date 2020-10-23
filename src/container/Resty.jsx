import React, { Component } from 'react';
import Controller from '../components/controller/Controller';





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
    fetch(this.state.url)
    .then(this.state.history.push(this.state.url, this.state.method))
    .then(console.log)
    
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


