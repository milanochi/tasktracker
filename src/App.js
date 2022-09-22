// import logo from './logo.svg';
import Header from './Header.js';
import { useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import Form from './Form';

 
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTask] = useState([{
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
      id: 2,
      text: 'Meeting at School',
      day: 'Jan 6th at 1:30pm',
      reminder: true ,
  }
  ,{
      id: 3,
      text: 'Food Shopping',
      day: 'Oct 10 at 3:00pm',
      reminder: false ,
  }])

//Delete tasks;
const deleteTask = (id) =>{
    setTask(tasks.filter((task) => task.id !== id))
   
}
//Add Task;
const addTask = (task) => {
   const id = Math.floor(Math.random() * 10000) + 1
   const newTask = { id, ...task }
   setTask([...tasks, newTask])
}

//Toggle reminder;
const toggle = (id)=> {
setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}
  return (
    <div className='App' >

      <div className='App_wrapper container'>
      <header className="App-header">
        <div className="App-header_inner container">
        <div>
        <h1>Task Tracker</h1>
        </div>
    
       <nav>
          <Header title="Add Task" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        </nav>   
    </div>
    {showAddTask && <Form onAdd={addTask} info="You can double-tap on task box below to track"/> }
    
</header>
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggle} />
        {/* <span className="container toggle-msg">Double Click on the taskbox below to toggle reminder</span> */}
        </div>

    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }