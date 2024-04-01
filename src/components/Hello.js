import React from "react";

const Hello = () => {
    // return (
    //     <div  className='dummyClass'>   
    //         <h1>Hello Mosharaf</h1>
    //     </div>
    // );

    return React.createElement(       // Using only JS code  
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, '1.react createElement method used to create this element.')
    )

    // const reactElement = {
    //     type: 'h1',
    //     props: {
    //       className: 'greeting',
    //       children: 'Hello, world!'
    //     }
    //   };
    
    // return React.createElement(reactElement.type, reactElement.props, null);
};

export default Hello;