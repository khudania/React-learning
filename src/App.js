
import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dfg1', name: 'Max', age: 28 },
      { id: 'fg3', name: 'Manu', age: 29 },
      { id: 'xcvb2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   });
  // };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons })

    // this.setState({
    //   persons: [
    //     { name: 'Himanshu', age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: 'Stephanie', age: 27 }
    //   ],
    //   otherState: 'some other value',
    //   showPersons: false
    // });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'Lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          {/* <Person
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
          /> */}

        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        {/* <button onClick={() => this.switchNameHandler('Himanshu123)}>Switch Name</button> */}
        {/* {
        this.state.showPersons === true ?
        <div>
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
        : null
        } */}

      </div>
      /* </StyleRoot> */
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App);
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
