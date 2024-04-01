import React from 'react';

/*
export const Greet = (props) => { // named export 
    console.log(props); //props is a object that contains all the attributes that are passed to the component
    return <h1>Hello {props.name} {props.lastName}.</h1>;
};
*/

// it is recomended to use arrow function for functional component 
const Greet = (props) => { 
    console.log(props); //props is a object that contains all the attributes that are passed to the component
    const {name, lastName} = props; // destructuring props
    
    const handleClick = () => {
        console.log('Event handling in functional component');
    }
    return (
        <h1 onClick={handleClick}> {name} {lastName} </h1>
    );
};
export default Greet;  // default export , can be any name in the import statement 



