import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import PureFuncCompReactMemo from './PureFuncCompReactMemo'

class TopComp extends Component {
    constructor(props) {
    super(props)

    this.state = {
        name: 'John',
    }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'John'
            })
        }, 2000)        
    }
    render() {
        return (
        <div>
            <h1>Top Component</h1>
            <PureFuncCompReactMemo name={this.state.name}/>
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
        </div>
        )
    }
}

export default TopComp