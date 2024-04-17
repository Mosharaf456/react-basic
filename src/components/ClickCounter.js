import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props 
        console.log(this.props.name);
        return (
            <div>
                <button onClick={incrementCount}> {this.props.name} ClickCounter {count} times</button> 
            </div>
        )
    }
}

export default withCounter(ClickCounter)