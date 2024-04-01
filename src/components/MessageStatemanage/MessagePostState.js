import React from 'react';

class MessagePostState extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}
export default MessagePostState; 