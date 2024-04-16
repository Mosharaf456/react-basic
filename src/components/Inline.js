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
        <h1 className='error'>Error Inline conflicts</h1>
        {/* <h2 className={styles.success}>module based Success not conflicts, this will through error: 'styles' is not defined</h2> */}


    </div>
  )
}

export default Inline