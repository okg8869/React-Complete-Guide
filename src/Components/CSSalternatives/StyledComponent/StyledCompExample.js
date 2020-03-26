import React, { Component } from 'react';
import styled from 'styled-components'


// This component reflects using "STYLED COMPONENTS" library as a solution for
// https://styled-components.com/

class StyledCompExample extends Component {

    state = {
        showPersons: false
      }
    
    renderPersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


    render() {
// recreating the base styling we've been using for buttons
// and using a turnariy expression with the '${}' selector, we can target the changeHandler
// to change things when shown vs not shown
        const StyledButton = styled.button`
            background-color: ${props => props.alt ? 'green' : 'red'};
            color: black;
            font: inherit;
            border: 1px solid black;
            padding: 8px;
            cursor: pointer;
            &:hover {
                background-color: ${props => props.alt ? 'lightgreen' : '#ee90bf'};
                color: black;
            }
        `;
// The above turnair on the 'background-color' is being called below in the 'alt' prop
// being passed into the newly rendered component <StyledButton/>
// We are using state to change the color when 'showPersons' is false vs True


// this is the syntax with Styled Components, based on the documentation above
// important to note those are 2 back ticks " `` " -- not quotes
// styling goes into the back ticks

        const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3pc #ccc;
            padding: 16px;
            text-align: center;
        
    
            @media (min-width: 500px) {
                width: 450px;
            }
        `;


        let persons = null;

        if(this.state.showPersons) {
          persons = (
            <div>
                <p>hey look I work</p>
                <p>test test test!</p>
                <p>Isn't page space great! yay!</p>
            </div>
          );
        }

        
        return (

            <StyledDiv>

                <StyledButton 
                    alt = {this.state.showPersons}
                    onClick = {this.renderPersonHandler}> I'm a Styly Boi! 
                </StyledButton>
                
                {persons}

            </StyledDiv>

        )
    }
};


export default StyledCompExample;