import React from 'react'

const ListRendering = () => {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h2>{name}</h2>)
    console.log(nameList);
    
    return (
        <div>
            ListRendering : {nameList}
        </div>
    )
}
export default ListRendering