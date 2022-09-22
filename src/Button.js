import React from 'react'
import './App.css'

const Button = ({ text, color, onAdd }) => {
  return (
    <div>
        <button className="btn-block" onClick={onAdd} style={{backgroundColor: color}}>{text}</button>
    </div>
  )
}

export default Button