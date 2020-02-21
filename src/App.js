import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Manya', age: 38 }
    ]
  }

  switchNameHandler = () => {
    // console.log("Was Clicked");
    //Don't do this:  this.state.persons[0].name = 'Hello'
    this.setState({
      persons: [
        { name: 'Ajay', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Manya', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi How are you?</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby is Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am React!!!'));
  }
}

export default App;
