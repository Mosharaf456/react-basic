import React from "react";


const UserContext = React.createContext('Mosharaf Hossain'); // default value

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

// context type property 
export default UserContext; 

