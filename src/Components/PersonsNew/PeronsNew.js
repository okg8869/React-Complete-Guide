import React from 'react'


const PersonsNew = (props) => {
  return(
    <div >

      <p>text</p>
      <strong>text</strong>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
};
  
 export default PersonsNew;