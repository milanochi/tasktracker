import React from 'react'
import './App.css' ;


function ChildComponent({ getHandler }) {
  return (
    <div>
        <div className='container'>
            <button onClick= {getHandler}>Greet</button>
            {/* <div><p>{developers.name} : {developers.language}</p></div> */}
        </div>
    </div>
  )
}

export default ChildComponent