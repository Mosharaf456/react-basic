import React from 'react'

function Inline() {
    // inline style
    // in react inline styles are not defined as string
    // in react inline styles are defined as object
    // in react we use camel case for css properties
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
  return (
    <div>
        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline