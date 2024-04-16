import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  // This component will re-render only when the props change 
  // implements shouldComponentUpdate with a shallow prop and state comparison
  // prevent unnecessary re-renders for performance optimization 
  // component will not re-render even if there is a changes if same reference in the state or props so always return new object or array when updating the state or props
  // to re-render the component
  render() {
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default PureComp