import React, { Component } from 'react'

/*
****************refs************
refs in react basically make it possible to access DOM node directly within react.
Note: ref can,t be attach on the functional component.

*/

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
        <div>
            <input type="text" ref={this.inputRef} />
            <button onClick={this.clickHandler}>Click</button>
        </div>
        )
    }
}

export default RefsDemo