import React, { Component } from 'react'

class ConditinalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islLoggedIn: true
        }
    }
    render() {
        return this.state.islLoggedIn && <div>Welcome Admin</div> // Short circuit operator
        
        // return (
        //     this.state.islLoggedIn ? (
        //         <div>Welcome Admin</div>
        //     ) : (
        //         <div>Welcome User</div>
        //     )
        // )

        // let message;
        // if(this.state.islLoggedIn) {
        //     message = <div>Welcome Admin</div>
        // }else {
        //     message = <div>Welcome User</div>
        // }
        // return <div>{message}</div>;


        // if(this.state.islLoggedIn) {
        //     return <div>ConditinalRendering1 ADMIN</div>
        // }else {
        //     return <div>ConditinalRendering USER</div>
        // }


        // return (
        //     <div>
        //         <div>ConditinalRendering1 ADMIN</div>
        //         <div>ConditinalRendering USER</div>
        //     </div>
        // )
    }
}

export default ConditinalRendering