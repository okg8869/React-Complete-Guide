// this component was converted from a Function to a Class component
import React, {Component} from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css'

//Higher Order Components (hox)
import Auxillary from '../../hoc/Auxillary';
import withClass from '../../hoc/withClass';


import './Person.css';
import AuthContext from '../../context/auth-context'


class Person extends Component {
// Calling the constructor so we can create a Ref using React.CreateRef() - to then be passed in as a prop below on the input
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }

// Another way to use the context API. IT MUST BE DEFINED THIS WAY BELOW
    static contextType = AuthContext;

    componentDidMount() {
// this.inputElement.focus() -- This ties in with the 'old' ref method below
// The goal is to focus on the last input when the page loads (cursor in the last input)
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }


    render(){
        console.log('[Person.js] rendering...');
// Using this.props in the function, 
//As well as running a small simple expression in line using {}
        return(
            <Auxillary>
                {/* Instead of doing it like this, do it the new way below */}
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in.</p> }
                </AuthContext.Consumer> */}

                {/* This is now possible because of the 'static = contextType' above */}
                { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in.</p> }
                
                
                <div className='Person'>
                    <p onClick={this.props.click}>I'm {this.props.name}, I am {this.props.age} years old, and my favorite number is {Math.floor(Math.random() * 30)}!!</p>
{/* this.this.props.children grabs all  this.props being passed into the component, even if they are not declared*/}
                    <strong>{this.props.children}</strong>

{/* Here we can see 2 way binding. Populating the value of the input from state, but also handling the onChange so we can update the input manually as well */}
{/* For the other inputs on the page not using this change method, you will be unable to type anything into them (because we are not passing the change handler to them in app.js)  */}
                    <input 
                        // ref={(inputEl) => {this.inputElement = inputEl}} -- This is a self contained version of the ref below it (old way of doing it vs New way)
                        ref={this.inputElementRef} // This is the newer 'more modern' way of passin a Ref
                        type='text' 
                        onChange={this.props.changed} 
                        value={this.props.name}
                    />
                </div>
            </Auxillary>
        )
    };
}

// This property queues to React (when in development mode) to look out for and provide
// a warning if you pass in any incorrect props. Here we are defining which props this component
// uses and which type of data they are.
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);