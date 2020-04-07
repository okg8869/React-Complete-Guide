import React, { useEffect } from 'react'


const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js useEffect');
// Http requests can be placed here
// UseEffect will render for EVERY render cycle
    setTimeout( () => {
      alert('Saved data to cloud!');
    }, 1000);
// below is the second argument under useEffect, making this more specific
// leaving the below array blank (the second argument) will result in running
// useEffect only the first time (this is a shortcut to have it run only once)
  }, []);


// You can also have multiple useEffect, meaning you can make multiple hooks of thiois type
  useEffect(() => {
    console.log('[Here is the second useEffect!!')
    const timer = setTimeout(() => {
      console.log('second thing')
    }, 1200);
    return () => {
// this clears out the timeout (notice I am not using it in the first useEffect - no reason)
      clearTimeout(timer);
      console.log(['Cockpit.js] cleanup work in useEffect'])
    };
  }, []);


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


// React.memo is a built in react function that memorizes the state/props in a functional
// Component, and makes it so that the component only re-renders when the props are updated.
// Here we take the whole 'PersonsNew' as a prop, is it updates whenever PersonsNew changes
// but if we made our props more specific (in this case to take the length from the component 
// instead of calculating it in this component) then the Cockpit would only re-render when 
// the length changes. (in this case) - This is used for optomization reasons
 export default React.memo(Cockpit);