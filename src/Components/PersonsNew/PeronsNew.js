import React, {Component} from 'react';

import Person from '../Person/Person';



class PersonsNew extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('[PersonsNew.js] getDerivedStateFromProps');
    return state;
  }

// Only early versions of 'componentWillReceiveProps()' will support this lifecycle identifyer
// Commenting out will remove error in front end
  componentWillReceiveProps(props) {
    console.log('[PersonsNew.js] componentWillRecieveProps', props);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
// here, you have to return true/fales (true if react should update) - (false if it should not)
    console.log('[PersonsNew.js] shouldComponentUpdate');
    if (
        nextProps.PersonsNew !== this.props.PersonsNew ||
        nextProps.changed !== this.props.changed       ||
        nextProps.clicked !== this.props.clicked 
      ) {
      return true;
    } else {
      return false;
    }
  }

  // this will save before component updates, and load the returned value into componentDidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[PersonsNew.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'}
  }

// Here you can use the returned value to update the DOM
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[PersonsNew.js] componentDidUpdate')
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[PersonsNew.js] componentWillUnmount')
// Here you can put any code that needs to run before the component unmounts
  }

  render() {
    console.log('[PersonsNew.js] rendering...');
    return this.props.persona.map( ( person, index ) => {
      return (<Person 
          click={() => this.props.clicked( index )}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed( event, person.id )} />
    )} );
  };
};

 export default PersonsNew;