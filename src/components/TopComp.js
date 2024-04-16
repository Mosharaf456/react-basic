import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class TopComp extends Component {
    constructor(props) {
    super(props)

    this.state = {
        firstName: 'John',
    }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                firstName: 'John'
            })
        }, 2000)        
    }
    render() {
        return (
        <div>
            <h1>Top Component</h1>
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
        </div>
        )
    }
}

export default TopComp