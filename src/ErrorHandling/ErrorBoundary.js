import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

// This is a method already in react, capturing the error in some info as props
// Will be execited whenever a component wrapped within the error boundary (<ErrorBoundary>) throws an error
  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  }

  render() {
    if (this.state.errorMessage) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
// this/props.children will be the default passed in (the component)
      return this.props.children;
    }
    
  }
}

export default ErrorBoundary;