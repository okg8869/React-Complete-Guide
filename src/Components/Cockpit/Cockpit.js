import React, { useEffect } from 'react'


const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js useEffect');
    // Http requests can be placed here
    // UseEffect will render for EVERY render cycle
  } );

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