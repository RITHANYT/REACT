import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import greet from './component/greet'

 class App extends Component {
  render() {
   return (
    <div className="App">
      <greet/>
    </div>
  );
 }  
}

export default App;
