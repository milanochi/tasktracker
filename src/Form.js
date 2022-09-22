import React from 'react';
import './App.css'
import { useState } from 'react';

const Form = ({ onAdd, info }) => {
const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const onSubmit = (e) =>{
    e.preventDefault()

    if(!text){
        alert('Please add Task')
        return
    }
    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
}
  return (
    <form onSubmit={onSubmit}>
        <div className='add-form container'>
            <div className='form-control'>
                <label>Task</label>
<input type='text' placeholder='Add Task' className='form-input' value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Day/Time</label>
<input type='text' placeholder='Add Day and Time' className='form-input' value={day} onChange={(e)=> setDay(e.target.value)}/>
            </div>
            
            <div className='form-control2'>
                <label>Set Reminder :</label>
<input type='checkbox' placeholder='Add reminder' checked={reminder} className='checkstyle' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value="Save Task" className='save-btn' />
        </div>
        <div className='info container'>{info}</div>
    </form>
  )
}

export default Form