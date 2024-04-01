import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return <h1>3.{this.props.name} {this.props.lastName} 4.{this.props.children}</h1>;
    }
}
export default Welcome; // default export