import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi How are you?</h1>
        <Person name="Max" age="28" />
        <Person name="Manu" age="38">My Hobby is Racing</Person>
        <Person name="Manya" age="25" />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am React!!!'));
  }
}

export default App;
