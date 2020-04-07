import React from 'react';

// React.createContext() allows us to initialize our context with a default values
// in the end, context is a globally available javascript Object (But we decide where it is available)
// This object can be passed between components WITHOUT PROPS

const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});


export default authContext;