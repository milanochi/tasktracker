import React from 'react'
import './App.css';
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className='container'>
      
        <div className={`tasks ${ task.reminder && 'tasks_reminder' }`} onDoubleClick={() => onToggle(task.id)}>
            <div>
            <h3 style={{color: '#231F20'}}>{task.text}</h3> 
            <p style={{color: '#333333'}}>{task.day}</p>
            </div>
          <FaTimes style={{color : 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
        </div> 
    </div>
  )
}

export default Task