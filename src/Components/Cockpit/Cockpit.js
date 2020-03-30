import React from 'react'


const Cockpit = (props) => {

  if (props.showPersona) {
    
  }

  return(
    <div >
      <h4 className='red'>Here is the Cockpit module</h4>
{/* This title is being set in APP.js under example 8 */}
      <h3>{props.title}</h3>
      <button 
        className='button'
        onClick={props.clicked}>I'm the Cockpit!</button>
    </div>
  )
};
  
 export default Cockpit;