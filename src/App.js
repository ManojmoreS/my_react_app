import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './todoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Your are just awesome!</p>
        </header><br/>
        <NameForm/>
      </div>
    );
  }
}

export default App;
