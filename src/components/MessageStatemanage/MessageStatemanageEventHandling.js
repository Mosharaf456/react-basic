import React from 'react';

// state are not changed directly on UI to rerendering the component of that state 
const MessageStatemanageEventHandling = (props) => {
    console.log(props); //props is an object
    const {name, lastName} = props;

    const increase = () => { // will not use parenthesis in the event handling  onClick 
        console.log('Increase btn click on functional component'); 
    }
    
    return (
        <>
            <h1>MessageStatemanageEventHandling</h1>
            <button onClick={increase}>Click</button>
            {/* event handler is a function not a function call*/}
        </>

    );
};

export default MessageStatemanageEventHandling;
