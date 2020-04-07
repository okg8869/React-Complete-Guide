import React, { Component } from 'react';
import classes from './App.css';
import './App.css';

// Components
import Person from './Components/Person/Person';
import Radiumexample from './Components/CSSalternatives/Radium/Radium';
import StyledCompExample from './Components/CSSalternatives/StyledComponent/StyledCompExample';
import ErrorBoundary  from './Components/ErrorHandling/ErrorBoundary'
import PersonsNew from './Components/PersonsNew/PeronsNew';
import Cockpit from './Components/Cockpit/Cockpit'

//Higher Order Components (hoc)
import withClass from './hoc/withClass';
import Auxillary from './hoc/Auxillary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(['[App.js] constructor']);
// state can also be initialized here, as opposed of regularly outside of the constructor
// use this.state, instead of this.SetState because state does not exist yet
  // this.state = 
  }


  state = {
    persons: [
      { name: 'Oliver', age: 29 }, 
      { name: 'Kenya', age: 28 },
      { name: 'Stephanie', age: 18 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showPersona: false,
    showCockpit: true,
    personsTwo: [
      { id: '1', name: 'Tucker', age: 28 },
      { id: '2', name: 'David', age: 29 },
      { id: '3', name: 'Harrison', age: 35 }
    ],
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

// Only early versions of 'componentWillMount()' will support this lifecycle identifyer
// Commenting out will remove error in front end
  componentWillMount() {
    console.log('[App.js] componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
// here, you have to return true/fales (true if react should update) - (false if it should not)
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  switchNameHandler = (newName) => {
// console.log('Was clicked');
// **DO NOT DO THIS** = "this.state.person[0].name = 'newNameHere' "
    this.setState( {
      persons: [
        { name: 'Donald', age: 29 }, 
        { name: newName, age: 28 },
        { name: 'Stephanie', age: 19 }
      ] 
    } )
  }

  deletePersonHandler = (personIndex) => {
// first we grab the current state and store to a variable
// using the spread operator '...'
    const personsNew = [...this.state.personsTwo];
// then we splice the new variable to remove 1 name from the array
    personsNew.splice(personIndex, 1);
// then we set the state to the new shortened list of names
    this.setState({personsTwo: personsNew})
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 29 }, 
        { name: 'Kenya', age: 28 },
        { name: 'Stephanie', age: 19 }
      ] 
    } )
  }

  personsTwoNameChangedHandler = (event, id) => {
// uses findIndex to identify the single person added by the input, and grab the index of that element
    const personIndex = this.state.personsTwo.findIndex(person => {
//return true or false if the id in state matches the id being passed as an argument to the name change handler
// if True, then the index will hold the correct name
      return person.id === id;
    });

// We then grab the above elements value (at the index stored in personIndex) and assign it to a variable
// We don't want to mutate the state directly, so we make a new javascript object using '{}' and use the spread operator to make a copy
    const foundPerson = {
      ...this.state.personsTwo[personIndex]
    };

// We now update the copy we've made - and change the name value to the target value like we did before
    foundPerson.name = event.target.value;

// we create a new variable to look at the current state 
// (not the copy we made above, this is a new copy that we will be mutating)
    const personCopyFromState = [...this.state.personsTwo];
// Now that we have pulled in the whole state from personsTwo above, we now update
// The individual found at the index (assentially just changing the name)
    personCopyFromState[personIndex] = foundPerson;

// lastly, we update state to the personCopy value above.
    this.setState( (prevState, props) => {
      return{
        personsTwo : personCopyFromState, 
        changeCounter: prevState.changeCounter + 1 //This is recommended when updating state when depending on an old state
    };
  });
  };
// Looking above at the setState function, setState just schedules the state chamge, and so it is not
// guarenteed that the state will not be updated elsewhere before this happens. Using the above syntax,
// You have another function that is grabbing the prevState, and then looking at 'prevState.changeCounter'
// instead of 'this.state.changeCounter. This way you can guarentee that you are updating the version of 
// state that you want to be updating



  renderPersonHandler = () => {
// create a variable and set to the current value of showPersons in state - 'true'
    const doesShow = this.state.showPersons;
    const doesShowTwo = this.state.showPersona;
// then we set it to what doesShow is not - thus toggling back and forth when the button is clicked
    this.setState({showPersons: !doesShow});
    this.setState({showPersona: !doesShowTwo})
  }

  



  render() {
    console.log('[App.js] render');

    const style = {
     backgroundColor: 'green',
     color: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding: '8px',
     cursor: 'pointer',
    };

    let persons = null;

    let swag = null;

    if(this.state.showPersons) {
// this is where persons is being set in the third example below
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
            changed={this.nameChangedHandler} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Killa-Kitty')} />
      </div>
      );
// dynamic styling off of the if statement here. Below we change the box to red all within this if/then statement
      style.backgroundColor = 'red';
      swag = <p className='swag'>fuck it up fuck it up</p>
    }
    
  let classes = ['red', 'bold'].join(' '); // Making a css class list in a variable, used in example 3
    
// A different way using if statements to add classes dynamically, in example 5
  const classesTwo = [];
  if (this.state.personsTwo.length <= 2) {
      classesTwo.push('red'); //classes = ['red']
    }
  if (this.state.personsTwo.length <= 1) {
    classesTwo.push('bold'); // classes = ['red', 'bold']
  }

// The above code could also look like this to be shorter:
// Below was originally an example, not it is being repurposed to make more specific components
// But the comment holds true
  let persona = null;   

  if(this.state.showPersona) {
    persona = (
      <div>
          <PersonsNew 
            persona={this.state.personsTwo}
            clicked={this.deletePersonHandler}
            changed={this.personsTwoNameChangedHandler}/>
      </div>
    );
  }
// Similar to how it is below in the third example

    return (
      <Auxillary>
      <div className='App'>
        <h1>Hi, I am a React App!!!! BURGER BUILDERRRR</h1>
        <h2>OK HERRE WE GO BELOW</h2>
        <h2>----------------------------------------------------------------------------------------------</h2>
        <h2>----------------------------------------------------------------------------------------------</h2>
        <h3>This is the first Component with STYLING!!!</h3>
        <h2>EXAMPLE 1</h2>
{/* using bind to pass an argument into the switchNameHandler
'this' refers to the class, and after the comma is the new value */}
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'K-Dog')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
// dynamically updating the page using the 'onChange' listener
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
// passing a method as a prop below:
// using bind to add another new value for newName in the method above
          click={this.switchNameHandler.bind(this, 'Killa-Kitty')} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
// passing a method as a prop below:
// when arrow functions are written in one line, they inherently add a 'return' after the arrow
// and so the below function is being returned 'onClick' ***Bind is better to use because of potential React re-rendering issues***
          click={() => this.switchNameHandler('KennyWise')} />
        <Person 
          name='Archibauld' age='26'>This is where props.children is grabbing
        </Person>


<h1>THIS IS A PAGE BREAK FOR THE BELOW TO SAVE SPACE AND THE CODE EXAMPLES BELOW</h1>
<h2>EXAMPLE 2</h2>

        <button 
          style={style}
          onClick={this.renderPersonHandler}>Show Names</button>
{/* Here I am wrapping the div in curly braces to make it a javascript object - allowing for 
us to write the follow expression to show/hide the whole div using the showPersons value in the state */}
        { 
// this below is a turnary expression (The ? and : null below) - that is essentially an if/then statement
// that will either render the code, or render 'null'
          this.state.showPersons === true ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                changed={this.nameChangedHandler} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this, 'Killa-Kitty')} />
            </div> : null
        }
        

<h1>ANOTHER WAY TO DO THE ABOVE TOGGLE</h1>
<h2>EXAMPLE 3</h2>
{/* Here the div and the jsx code is being set above as a variable, and we are using an if/then statement
to toggle the variable to dispay or be null. We call the variable below with 'persons' */}
        {persons}

{/* this is assigning the classes above, which are currently a string variable */}
        <p className={classes}>It's working! Watch my classes change "let classes above" </p>


<h1>THIS IS A PAGE BREAK FOR THE BELOW TO SAVE SPACE AND THE CODE EXAMPLES BELOW</h1>
<h2>EXAMPLE 4</h2>
{/* A big problem with how we are rendering the 'Persons' above is that we are using each persons index
so we run the risk of that breaking as the list is changed. We can instead print out the list like so */}

{/* Here we are using the map function to map the persons array in our state and executing a method
on each element in the array, which we are labeling 'person' to avoid confusion, we then write an ES6
arrow function for the map function to pass each object to. Since we need to return JSX, we will map each
object to a Person component. Now every element in the array is mapped as a javascript object into the Person
Component */}

        
        {this.state.persons.map(person => {
          return <Person 
            name={person.name}
            age={person.age}/>
        })}

{/* We could then replace the code in the if statement at the top with this to instead render this when
the toggle button is clicked */}

<h1>THIS IS A PAGE BREAK FOR THE BELOW TO SAVE SPACE AND THE CODE EXAMPLES BELOW</h1>
<h2>EXAMPLE 5</h2>

          <button 
          style={style}
          onClick={this.deletePersonHandler}>Delete Names</button>

{/* We are now adding the index to the argument of the map function, and are then 
passing it to the deletePersonHandler by making an arrow function (you could also use 'bind') */}
        {this.state.personsTwo.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
// in personsTwo in the state we have added an id, which we are using for the key
// the 'key' will be the unique identifier that react can use to identify current vs past 
// values in this array
            key={person.id}
// here we are re-using the name change handler (edited to use the different name state values)
// and are passing the event from the handler (the value typed into the input)
// this is how we capture the event being listened to (changed) and pass it to the name change handler
// making it possible to pass both the event and the ID in the array as seen below
            changed={(event) => this.personsTwoNameChangedHandler(event, person.id)} />
        })}

{/* It is the join method here and above that assigned the classes as a string */}
        <p className={classesTwo.join(' ')}>It works it works (from the above 'if' statements)</p>
       
<h1>THIS IS A PAGE BREAK FOR THE BELOW TO SAVE SPACE AND THE CODE EXAMPLES BELOW</h1>
<h2>EXAMPLE 6</h2>

<p>this is for the radium example, because I was getting key issues</p>

        <Radiumexample/>


<h1>THIS IS A PAGE BREAK FOR THE BELOW TO SAVE SPACE AND THE CODE EXAMPLES BELOW</h1>
<h2>EXAMPLE 7</h2>

<p>this is for the Styled Components example</p>
      <StyledCompExample/>
        

<h1>THIS IS A PAGE BREAK FOR THE BELOW TO SAVE SPACE AND THE CODE EXAMPLES BELOW</h1>
<h2>EXAMPLE 8</h2>

        <p>I tell all my hoes... Rake it up, Break it down</p>
        <button className='button'onClick={this.renderPersonHandler}>Back it up</button>
        {swag}

<h1>THIS IS A PAGE BREAK FOR THE BELOW TO SAVE SPACE AND THE CODE EXAMPLES BELOW</h1>
<h2>EXAMPLE 8 - Error Catching</h2>
{/* This is being wrapped in <ErrorBoundary>, which is now a higher order component
Right now, this will throw the error on the page, but once it is in production it will
instead display the 'error message' from state. You only want to use this in places where
you know there will be an error. DON'T WANT TO USE IT EVERYWHERE - only when troubleshooting
a trouble component. NICE TO KNOW, NOT TO USE EVERYWHERE*/}
        <div>
          {this.state.personsTwo.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}> 
                <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  
                  changed={(event) => this.personsTwoNameChangedHandler(event, person.id)} />
              </ErrorBoundary>
            )})}
        </div>
<h1>THIS IS A PAGE BREAK FOR THE BELOW TO SAVE SPACE AND THE CODE EXAMPLES BELOW</h1>
<h2>EXAMPLE 8</h2> 
<h2>From here on out, we are working on getting more specific components</h2>
      {this.state.showCockpit ? (
      <Cockpit 
// Here is the Title props being passed into the Cockpit module. This is to show the this.
// selector for props. 'this.props.appTitle' -- it is actually being passed into the App.js
// component from the index.js file!
        title={this.props.appTitle}
        showPersona={this.state.showPersona}
        persona={this.state.PersonsTwo}
        clicked={this.renderPersonHandler}/>
      ) : null}
      {persona}
      <button 
        onClick={() => {this.setState({ showCockpit: false })
        }}>REMOVE COCKPIT</button>

        </div>
      </Auxillary>
    );
  }
}

// This withClass is being defined in the hoc folder. Allowing us to wrap the entire component
// in a CSS class and a <div/> element
export default withClass(App, classes.App);
