
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Himanshu', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Himanshu')}>Switch Name</button>
        {/* <button onClick={() => this.switchNameHandler('Himanshu123)}>Switch Name</button> */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Himanshu0705')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;







// ***********State Based Codes**************

// // import React, { Component } from 'react';
// import React, { useState } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Person from './Person/Person';


// const app = props => {
//   // class App extends Component {
//   // state = {
//   //   persons: [
//   //     { name: 'Max', age: 28 },
//   //     { name: 'Manu', age: 29 },
//   //     { name: 'Manya', age: 38 }
//   //   ]
//   // }

//   // render() {

//   const [personState, setPersonsState] = useState(
//     {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Manya', age: 38 }
//       ],
//       otherStates: 'Some Other State'
//     }
//   );


//   console.log(personState);

//   const switchNameHandler = () => {
//     // console.log("Was Clicked");
//     //Don't do this:  this.state.persons[0].name = 'Hello'
//     setPersonsState({
//       persons: [
//         { name: 'Ajay', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Manya', age: 27 }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi How are you?</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age} />
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       click={this.switchNameHandler}>My Hobby is Racing</Person>
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age} />
//     </div>
//   );
//   // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am React!!!'));
//   // }
// }

// export default app;
