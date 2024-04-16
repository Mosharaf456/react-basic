import React from 'react'

function FragmentDemo() {
    // React.Fragment is used to wrap multiple elements without adding extra nodes to the DOM , it is mendatory 
    // to wrap multiple elements in a single parent element
    // React.Fragment does support key attribute
    // <> </> does n,t support key attribute
    // short syntax for React.Fragment is <> </>
  return (
    <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This describes the Fragment Demo component</p>
    </React.Fragment>
  )
}

export default FragmentDemo