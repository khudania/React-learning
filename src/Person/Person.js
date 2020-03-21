import React from 'react';
// import './Person.css';
// import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div`
            width:60%;
            margin:16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 2px #eee;
            padding: 16px;
            text-align: center;

            '@media (min-width:500px)': {
                width: '450px',
            }
        `

const person = (props) => {

    // const style = {
    //     '@media (min-width:500px)': {
    //         width: '450px',
    //     }
    // }

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            < p onClick={props.click} > I am a {props.name} and I am {props.age} years old</p >
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};

// export default Radium(person);
export default person;