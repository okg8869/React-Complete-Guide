import React, { Component } from 'react';
import Radium from 'radium';


// RADIUM IS A SOLUTION FOR PSUEDO SELECTORS AND MEDIA QUERRIES IN REACT COMPONENTS
// AND BEING ABLE TO SCOPE THEM TO COMPONENTS


// The import of 'StyleRoot' is needed to add media querries. What we would need is to import 
// StyleRoot at the app.js level, and then wrap my return code below in <StyleRoot></StyleRoot>
// that will allow the below media querry to load and resolve the "addCSS" issue

class Radiumexample extends Component {

// Basically this component will reflect anything learned from using Radium to add hover affects and media querries

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
              },
            //   this is the radium style media querry
            // '@media (min-width: 500px)' : {
            //     width: '450px',

            // }
        }

// Similar to changing the button color in the if statements in the app.js file
// we could change the hover coloring and whatnot with something like

        if(this.state.showPersons) {
            
// dynamic styling off of the if statement here. Below we change the box to red all within this if/then statement
            style.backgroundColor = 'red';
// here you nee to use brackets instead of the "." to target the hover styling
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'white'
            }
          }

        return (
            <div>
                <button style = {style}> Just Look! I don't do much</button>


        </div>
        )
    }
};

export default Radium(Radiumexample);