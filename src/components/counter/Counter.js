import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0 
      }
    }

    increment() {
        //ncrementFive() method : all update will be grouped into single state call
        // synchronous call // doesn,t carry over the changes to the next state call at looping calls 
        // multiple set state call is grouped into single state call update for better performance 
        // this.setState({
        //     count: this.state.count + 1 
        // }, () => {
        //     console.log('Callback value:', this.state.count);
        // });
        // console.log('Before state has been updated:',this.state.count);
    
        
        // solution to above problem incrementFive() method 
        this.setState((prevState, props) => ({ // ui wii re render by using set state method , prevState is accessed by Callback function
                        count: prevState.count + 1                 // count: prevState.count + props.addValue
                       }), () => {console.log('Callback value state changed then logic here:', this.state.count);});

        // console.log('Before state has been updated:',this.state.count);

    }
    incrementFive() {
        // console.log(this);
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <br></br>
                <div>Count - {this.state.count}</div>
                <br></br>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        );
    }
}
export default Counter; 