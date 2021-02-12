import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['Tolu', 'Khomo', 'Karina', 'Tolu']

    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
    ]

    const nameList = names.map((name, index) => <h2 key={index} >{name}</h2>)

    const personList = persons.map(person => <h2 key={person.id} >I am {person.name}. I  am  {person.age} years  old. I know {person.skill} </h2>)

    const personListTwo = persons.map(person => <Person  key={person.id}  person={person} ></Person>  )

    return (
        <div>
            {/* {
                names.map(name => <h2 key={name}>{name}</h2>)
            }

            <div>{personList}</div>

            <div>{personListTwo}</div> */}

            <div>{nameList}</div>

        </div>
    )
}

export default NameList;
