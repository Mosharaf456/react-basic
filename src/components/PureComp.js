import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  // This component will re-render only when the props change 
  // implements shouldComponentUpdate with a shallow prop and state comparison
  // prevent unnecessary re-renders for performance optimization 
  // component will not re-render even if there is a changes if same reference in the state or props so always return new object or array when updating the state or props
  // to re-render the component
  // It is good idea to use Pure component when you know your component doesn't need to re-render and also all the children components are pure components
  // to avoid unexpected behavior
  // Never mutate the state or props . ALways return new object or array when updating the state or props
  render() {
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default PureComp