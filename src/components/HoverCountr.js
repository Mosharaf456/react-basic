import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCountr extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hover {count} Counter</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCountr)