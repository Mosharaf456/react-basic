import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  // This component will re-render only when the props change 
  // implements shouldComponentUpdate with a shallow prop and state comparison

  render() {
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default PureComp