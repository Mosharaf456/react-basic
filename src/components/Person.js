import React from 'react'

function Person({ person }) {
  // const { person } = props            
  //key props is not available in the Person as child component component.  
  // key props is reserved for the parent component. 
  // key is a special string attribute you need to include when creating lists of elements.
  // Keys give the elements a stable identity.
  // keys help React identify which items have changed, are added, or are removed.
  return (
    <div>
        <h2>
            I am {person.name}. I am {person.age} years old. I know {person.skill}.
        </h2>
    </div>
  )
}

export default Person