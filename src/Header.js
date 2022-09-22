import React from 'react';
import PropTypes from 'prop-types';
import './App.css'
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <div>
        {/* <button onClick={onAdd} className={}>{showAdd ? 'Close' : 'Add Task'}</button> */}
        <Button text={showAdd ? 'Close' : 'Add Task'} color={showAdd ? '#333333' : 'maroon'} onAdd={onAdd}/>
    </div>
  )
}
// Header.defaultProps ={
//   title: 'Create Account',
// }
Header.propTypes = {
  title: PropTypes.string,
}

export default Header