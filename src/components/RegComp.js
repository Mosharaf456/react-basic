import React, { Component } from 'react'

class RegComp extends Component {

    // This component will re-render every time the parent component re-renders
    //does n,t implements shouldComponentUpdate with a shallow prop and state comparison
  render() {
    return (
      <div>RegComp {this.props.name}</div>
    )
  }
}

export default RegComp