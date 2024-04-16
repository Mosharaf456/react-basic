import React, { Component } from 'react'

/*
    We can mainly divide the lifecycle methods into four phases:
    *1. Mounting - When an instance of a component is being created and inserted into the DOM
    // Methods in mounting phase
    1. constructor
    2. static getDerivedStateFromProps
    3. render
    4. componentDidMount

    *2. Updating - When a component is being re-rendered as a result of changes to either its props or state
    // Methods in updating phase
    1. static getDerivedStateFromProps
    2. shouldComponentUpdate
    3. render
    4. getSnapshotBeforeUpdate
    5. componentDidUpdate

    *3. Unmounting - When a component is being removed from the DOM
    // Methods in unmounting phase
    1. componentWillUnmount

    *4. Error Handling - When there is an error during rendering, in a lifecycle method, 
    or in the constructor of any child component
    // Methods in error handling phase
    1. static getDerivedStateFromError
    2. componentDidCatch
*/
class LifeCyclehooksClassComp extends Component {
  render() {
    return (
      <div>LifeCyclehooksClassComp Description ADDDED</div>
    )
  }
}

export default LifeCyclehooksClassComp