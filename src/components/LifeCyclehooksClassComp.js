import React, { Component } from 'react'

/*
    We can mainly divide the lifecycle methods into four phases:
    *1. Mounting - When an instance of a component is being created and inserted into the DOM
    // Methods in mounting phase
    1. constructor -- HTTP call is not recommended here, side effect  // used to initialize the state of the component
    2. static getDerivedStateFromProps(props, state) - rarely used // used when the state of the component depends on changes in props over time 
    3. render - only required method in a class component, pure function, used to return the JSX of the component
    4. componentDidMount - called only once in a lifecycle of a component, invoke immediately after a component and all its children components have been required to the DOM // used to make API calls, set up subscriptions, or set up event listeners
    load data by network ajax request or initialize the DOM

    *2. Updating - When a component is being re-rendered as a result of changes to either its props or state
    // Methods in updating phase
    1. static getDerivedStateFromProps (props, state)
    2. shouldComponentUpdate(nextProps, nextState) - rarely used 
    3. render
    4. getSnapshotBeforeUpdate(prevProps, prevState)
    5. componentDidUpdate(prevProps, prevState, snapshot) -- can make network request 

    *3. Unmounting - When a component is being removed from the DOM
    // Methods in unmounting phase
    1. componentWillUnmount - component unmount and destroyed // used to cleanup any network request or handler , invaliditing timer 
    -- Don,t call setState in componentWillUnmount method

    *4. Error Handling - When there is an error during rendering, in a lifecycle method, 
    or in the constructor of any child component
    // Methods in error handling phase
    1. static getDerivedStateFromError(error) 
    2. componentDidCatch(error, info) -- used to log the error information 
*/
class LifeCyclehooksClassComp extends Component {
  render() {
    return (
      <div>LifeCyclehooksClassComp Description ADDDED</div>
    )
  }
}

export default LifeCyclehooksClassComp