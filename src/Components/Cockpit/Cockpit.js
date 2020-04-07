import React, { useEffect, useRef, useContext } from 'react'

import AuthContext from '../../context/auth-context'
import authContext from '../../context/auth-context';


const Cockpit = (props) => {
  // Here we are using the 'useContext' hook to (this is the functional component version of the 
  // static contextType (which is for class based components))
  const AuthContext = useContext(AuthContext);

  console.log(authContext.authenticated)

  // const toggleBtnRef = React.createRef(); -- NOT SUPPORTED IN FUNCTIONAL COMPONENTS - (only class components) - so we use the hook
  const toggleBtnRef = useRef(null); //-- this is what you would use in a functional component
  
// useEffect runs after every render cycle (meaning it runs last)
  useEffect(() => {
    console.log('[Cockpit.js useEffect');
// Http requests can be placed here
// UseEffect will render for EVERY render cycle
    // setTimeout( () => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click(); // Here is the ref above, used here so it is called at the end not the begging
    
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
  }, 
  // this array below is the second argument
  []);


  return(
    <div >
      <h4 className='red'>Here is the Cockpit module</h4>
{/* This title is being set in APP.js under example 8 */}
      <h3>{props.title}</h3>
      <button 
        ref={toggleBtnRef} // Here is where the above ref is being assigned
        className='button'
        onClick={props.clicked}>
          I'm the Cockpit!
      </button>

      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}

      {/* This is defined above 'authContext' (used for functional vs class components) */}
      <button onClick={authContext.login}>Log in</button>

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