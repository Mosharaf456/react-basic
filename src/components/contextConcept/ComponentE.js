import React, { Component } from 'react'
import ComponentF from './ComponentF'

import UserContext from '../userContext'

class ComponentE extends Component {
    // context type property is used to consume the context value in class component
// limitations it is only works with in class component
// you can subscribe to a single context using contextType property
// not more then one context for static contextType
    static contextType = UserContext
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

// ComponentE.contextType = UserContext 
export default ComponentE