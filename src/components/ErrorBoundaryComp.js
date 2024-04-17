import React, { Component } from 'react'

// Error Boundary is a class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch.
// didn,t hide crash on the development mode , only hide in the production mode

class ErrorBoundaryComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) { 
        // used to log the error information ,didn,t catch the error in the event handler but you should as usual try catch 

        console.log(error)
        console.log(info)
    }
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong</h1>
      }
        return this.props.children
    }
}

export default ErrorBoundaryComp