import React, { Component } from 'react';
import styled from 'styled-components'


// This component reflects using "STYLED COMPONENTS" library as a solution for
// https://styled-components.com/

class StyledCompExample extends Component {
    render() {
        // standard styling we've been using
        const style = {
            backgroundColor: 'lightgreen',
            color: 'black',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }

            // this is the syntax with Styled Components, based on the documentation above
            // important to note those are 2 back ticks " `` " -- not quotes
            // styling goes into the back ticks

        const StyledDiv = styled.div = `
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3pc #ccc;
            padding: 16px;
            text-align: center;
        
    
            @media (min-width: 500px) {
                width: 450px;
            }
        `

        return (

            <StyledDiv>
                <button style = {style}> I'm a Styly Boi! </button>
            </StyledDiv>

        )
    }
};


export default StyledCompExample;