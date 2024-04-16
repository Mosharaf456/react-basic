import React from 'react'

function Person({ person }) {
  // const { person } = props            
  //key props is not available in the Person as child component component.  
  // key props is reserved for the parent component. 
  return (
    <div>
        <h2>
            I am {person.name}. I am {person.age} years old. I know {person.skill}.
        </h2>
    </div>
  )
}

export default Person