import React, { Component } from 'react';
import Controller from '../components/controller/Controller';
import Display from '../components/display/Display';
import HistoryList from '../components/history/HistoryList';
import fetchApi  from '../services/fetch-api';
import styles from './Resty.css'



export default class Resty extends Component {
  state = {
    
    url: '',
    text: '',
    method: '',
    history: [],
    result: {}
   
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
    .then(result => this.setState({ result }));
    this.setState(state => ({
      history: [
        ...state.history,
        { url: state.url, method: state.method }

      ]
    }));
    
  };

render() {
  const { url, text, method, history, result} = this.state

  return (
   <div >
    <Controller 
    text ={text}
    url = {url}
    method = {method}
    onChange={this.handleChange} 
    onSubmit={this.handleSubmit}
    />
    <section className={styles.main}>
      <div className={styles.display}>
    <Display result= {result} />
    </div>
    <div className={styles.history}>
    <HistoryList history = {history}/>
    </div>
    </section>
    
    </div>
 

);

}
};


