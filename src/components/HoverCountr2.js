import React, { Component } from 'react'

class HoverCountr2 extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div><h1 onMouseOver={incrementCount}>2Hover {count} times</h1></div>
        )
    }
}

export default HoverCountr2