import React from 'react';

const withClass = (WrappedCompoent, className) => {
  return props => (
     //<div className={props.classes}>{props.children}</div>
    <div 
      className={className}>
        {/* Here the spread operater '...' is grabbing all the props that a component would normally get
        in one case, Person is recieving a number of handlers and props, this spread will grab those props
        for this component */}
        <WrappedCompoent {...props}/>
    </div>
  );
};


export default withClass;