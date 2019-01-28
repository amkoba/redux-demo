import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import stores from './stores/store'
import {connect} from 'react-redux';
import axios from 'axios';

class App extends Component {

  increment = () => {
    stores.dispatch({type: 'ADD'});
  }

  fetchUsers = () => {
   
  }
  me = (res) => {
    stores.dispatch({type: 'USERS',  data: res});
  }
  
   getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        this.me(res.data);
    })
  }  
  render() {
    return (
      <div className="App">
        <strong> Counter </strong>
        <p>{this.props.count}</p>
        <button onClick={this.increment} > + </button>

        <button onClick={this.getUsers} > Users </button>

        <div>
           {this.props.users.map(user => <div key={user.id}> {user.name} </div>)} 
       </div>        
      </div>
    );
  }
}


const result = (state) => {
  console.log(state);
  return {
    count: state.add.count,
    users: state.users.users
  }
} 

export default connect(result)(App);
