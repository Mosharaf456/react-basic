import React from 'react';
import Person from './Person';

/*
const nums = [-5,-7,1,-2,4,2,3,5,0];
const result = nums
                .filter(n => n >= 0)
                .map(n => ({ value: n }))
                .filter(n => n.value > 1)
                .map(n => n.value)
console.log('======Just for learning result:=========', result); 
*/
function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 35,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 23,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 26,
            skill: 'Vue'
        }
    ];
    // key is a special string attribute you need to include when creating lists of elements.
    // Keys give the elements a stable identity.
    // keys help React identify which items have changed, are added, or are removed.
    // Keys should be given to the elements inside the array to give the elements a stable identity.
    // Keys only make sense in the context of the surrounding array.
    // Keys used within arrays should be unique among their siblings.
    // However, they don’t need to be globally unique.
    // Keys serve as a hint to React but they don’t get passed to your components.
    // If you need the same value in your component, pass it explicitly as a prop with a different name.
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    // return <div>{personList}</div>

    // infact, we can use index as key but it is not a good practice
    // infact react uses index as key when key is not provided
    // safely use index as key when:
    // 1. the items in your list do not have a unique id.
    // 2. the list is a static list and will not change.
    // 3. the list will never be reordered or filtered.
    // 4. the list will not have items removed or added.
    // 5. the list will remain static.
    // 6. the list will not be manipulated in any way.
    
    //Note:
    // use npm packages to genrate a unique ID for a list of items:
    // always use unique key when the list is dynamic and will change.
    // if unique key is not available then  hasing out a unique value from one of the existing properties.
    // bottom line is try avoid to use index as key


    const names = ['Bruce', 'Clark', 'Diana','Bruce'];
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div> NameList {nameList}</div>
}

export default NameList;