// import React from 'react';  -- We don't even really need this import since it's not being used

// This component is essentially an empty wrapper, currently being used in the Person.js
// Component. Because of the props.children below, everything being passed in is treated
// like a prop ( the "<Auxillary> </Auxillary>"" tags act as the opening and closing tags, 
// defining the Props for this component )



// Here, children is a special property that outputs whatever is entered
// between the opening and closing tag of this opponent, somewhat like a catchall
const Auxillary = props => props.children;


export default Auxillary;



// There is now a built in version of this. It is <React.Fragment> </React.Fragment>
// This can be used instead of Auxillary