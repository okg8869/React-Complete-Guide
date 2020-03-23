import React, { Component } from 'react';
import './App.css';

// Components
import Person from './Person/Person';
import Radiumexample from './CSSalternatives/Radium/Radium';
import StyledCompExample from './CSSalternatives/StyledComponent/StyledCompExample';

class App extends Component {
  state = {
    persons: [
      { name: 'Oliver', age: 29 }, 
      { name: 'Kenya', age: 28 },
      { name: 'Stephanie', age: 18 }
    ],
    otherState: 'some other value',
    showPersons: false,
    personsTwo: [
      { id: '1', name: 'Tucker', age: 28 },
      { id: '2', name: 'David', age: 29 },
      { id: '3', name: 'Harrison', age: 35 }
    ]
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
    this.setState( {personsTwo : personCopyFromState} )
  }



  renderPersonHandler = () => {
    // create a variable and set to the current value of showPersons in state - 'true'
    const doesShow = this.state.showPersons;
    // then we set it to what doesShow is not - thus toggling back and forth when the button is clicked
    this.setState({showPersons: !doesShow});
  }



  render() {
    const style = {
     backgroundColor: 'green',
     color: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding: '8px',
     cursor: 'pointer',
    };

    let persons = null;

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
                    //       let persons = null;

                    //       if(this.state.showPersons) {
                    //         persons = (
                    //           <div>
                    //              {this.state.persons.map(person => {
                    //                 return <Person 
                    //                   name={person.name}
                    //                   age={person.age}/>
                    //               })}
                    //         </div>
                    //         );
                    //       }
    // Similar to how it is below in the third example

    return (
      <div className="App">
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
        {/* Here the div and the jsc code is being set above as a variable, and we are using an if/then statement
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
        



      </div>
    );
  }
}

export default App;
