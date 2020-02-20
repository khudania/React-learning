import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi How are you?</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am React!!!'));
  }
}

export default App;
