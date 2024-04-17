import React, { Component } from 'react'

class User extends Component {
  render() {
    const {render} = this.props
// The render props refers to a technique for sharing code between React components using a prop whose value is a function.
    return (
        <div>
            {render(true)}
        </div>
    )
  }
}

export default User