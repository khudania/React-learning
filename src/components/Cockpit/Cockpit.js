import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(() => {
    console.log('[cockpit.js]! useEffect')
    // HTTP Request
    const timer = setTimeout(() => {
      alert('Saved Data in Server')
    }, 1000)
    return () => {
      clearTimeout(timer)
      console.log('[cockpit.js]! CLeanup work in useEffect')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js]! This is my 2nd useEffect')
    return () => {
      console.log('[cockpit.js]! CLeanup work in 2nd useEffect')
    }
  })

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;