import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        comments: '',
        topic: 'react'
      }
    }
    /*
     When you assign a handler to the onChange event the******* event itself is passed as an parameter to the handler. 
     so we have one parameter called event. 
     you can access the value of the input field using event.target.value.
     so any time you change the input value that value is captured using event.target.value and set to the state.
    */
   /*
    Three steps to handle form input:
    1. Adding html element 
    2. Initialize/Assign the component state to the element value
    3. Assign onchange handler to the element that updates the state

   */
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }
    render() {
        const {username, comments, topic} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username </label>
                    <input type='text' value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments </label>
                    <textarea value={comments} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label>Topic </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>                           
                </div>
                <button type='submit'>Submit</button>
                {/* type is submit will give user the ability to submit forms by hitting the enter key which is always good*/}
            </form>
        )
    }
}

export default Form