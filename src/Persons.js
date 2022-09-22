import React from 'react'

function Persons({person}) {
  return (
    <div><p>{person.name} : {person.language}</p></div>
  )
}

export default Persons;