import React from "react";

// Methods as props passed in the child component
// Calling parent method from child component 
function Child(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Chlid</button>
    </div>
  );
}

export default Child;