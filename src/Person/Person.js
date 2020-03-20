// a simple javascript function component
import React from 'react';


import './Person.css';


const person = (props) => {
    // Using Props in the function, 
    //As well as running a small simple expression in line using {}
    return(
        <div className='Person'>

            <p onClick={props.click}>I'm {props.name}, I am {props.age} years old, and my favorite number is {Math.floor(Math.random() * 30)}!!</p>
{/* props.children grabs all  props being passed into the component, even if they are not declared*/}
            <strong>{props.children}</strong>

{/* Here we can see 2 way binding. Populating the value of the input from state, but also handling the onChange so we can update the input manually as well */}
{/* For the other inputs on the page not using this change method, you will be unable to type anything into them (because we are not passing the change handler to them in app.js)  */}
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;