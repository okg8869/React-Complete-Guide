// this component was converted from a Function to a Class component
import React, {Component} from 'react';

//Higher Order Components (hox)
import Auxillary from '../../hoc/Auxillary';



import './Person.css';


class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
// Using this.props in the function, 
//As well as running a small simple expression in line using {}
        return(
            <Auxillary>
                <div className='Person'>
                    <p onClick={this.props.click}>I'm {this.props.name}, I am {this.props.age} years old, and my favorite number is {Math.floor(Math.random() * 30)}!!</p>
{/* this.this.props.children grabs all  this.props being passed into the component, even if they are not declared*/}
                    <strong>{this.props.children}</strong>

{/* Here we can see 2 way binding. Populating the value of the input from state, but also handling the onChange so we can update the input manually as well */}
{/* For the other inputs on the page not using this change method, you will be unable to type anything into them (because we are not passing the change handler to them in app.js)  */}
                    <input type='text' onChange={this.props.changed} value={this.props.name}/>
                </div>
            </Auxillary>
        )
    };
}
export default Person;