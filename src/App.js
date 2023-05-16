import './App.css';
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([
  { id: 1, name: 'Water the Plants', highPriority: true },
  { id: 2, name: 'Feed the Dog', highPriority: true },
  { id: 3, name: 'Fix my Bike', highPriority: false },
  { id: 4, name: 'Go for a Cycle', highPriority: true }
  ])


  const [newTask, setNewTask] = useState('')

  
  const listTasks = tasks.map((task) => {
    return(
      <li className={task.highPriority ? 'highPri' : 'lowPri' }>
      {task.name}
      <button onClick={() => completeTask(task.id)}>Complete</button>
      </li>
    )
  })


  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }


  const saveNewTask = (event) => {
    event.preventDefault();
  
    const priorityInput = document.querySelector('input[name="priority"]:checked');
    const priority = priorityInput ? priorityInput.value : 'low';
  
    const newTaskObj = { id: Date.now(), name: newTask, highPriority: priority === 'high' };
    const nextTasks = [...tasks, newTaskObj];
    setTasks(nextTasks);
    setNewTask('');
  };


  const completeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }




  return (
    <div className="App">
    <h1>To-Do List</h1>
    <hr></hr>
    <ul>
      {listTasks}
    </ul>
      <form onSubmit={saveNewTask}>
          <label htmlFor='new-task'>Add a new task:</label>
          <input id='new-task' type='text' value={newTask} onChange={handleTaskInput} />
          <div>
            <input type="radio" id="high-priority" name="priority" value="high" />
            <label htmlFor="high-priority">High Priority</label>
          </div>
          <div>
            <input type="radio" id="low-priority" name="priority" value="low" />
            <label htmlFor="low-priority">Low Priority</label>
          </div>
          <input type='submit' value='Save new task' />
      </form>
    </div>
  );
}

export default App;
