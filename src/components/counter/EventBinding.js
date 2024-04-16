// Event binding is required in React to bind the event handler to the component.
// How to bind event handlers in React Component 
// the reason is purly this keyword works in Javascript , it is not React specific
// this keyword is undefined in event handler that is why we need to bind the event handler

// There are five ways to bind event handlers in React:
// 1. Binding in the render method: performance implications
// 2. Binding using Arrow function in the render method: performance issues, implications
// 3. Binding in the constructor: best way to bind event handlers
// 4. Class property as arrow function:  best way to bind event handlers as experimental feature


import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello1',
            message2: 'Hello2!'

        }
        // 3. Binding in the constructor:
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            message: 'Goodbye1!',
        })
        console.log(this);
    }
    // 4. Class property as arrow function:
    clickHandler2 = () => {
        this.setState({
            message2: 'Goodbye2!'
        })
        console.log(this);
    }
    render() {
        return (
         <div>
                <div>{this.state.message}</div>
                <br></br>
                <div>{this.state.message2}</div>
                {/* 1. Binding in the render method: */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* 2. Binding using Arrow function in the render method: */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                
                {/* 3. Binding in the constructor: */}
                <button onClick={this.clickHandler}>Click1</button>
                <br></br>
                {/* 4. Class property as arrow function: */}
                <button onClick={this.clickHandler2}>Click2</button>


         </div>
        )
    }
}

export default EventBinding