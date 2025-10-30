import {useState} from 'react'
import TaskBar from './TaskBar';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addTask() {
    const task = newTask.trim();
    if (task) {
      setTasks([...tasks, task]);
      setNewTask('');
    }
  }

  function addNewTaskOnEnter(e) {
    if(e.key === 'Enter') {
      addTask();
      return;
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index) {
    const editedTask = prompt("Edit your task:", tasks[index]);
    if (editedTask !== null) {
      const updatedTasks = tasks.map((task, i) => 
        i === index ? editedTask.trim() : task
      );
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='flex justify-center mt-10'>
      <div >
        <div className='flex justify-between p-1 border border-b-black rounded-md shadow-lg '>
          <input
            className='p-1 focus:outline-none  '
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => addNewTaskOnEnter(e)}
            type="text"
             />
          <button 
            className="rounded-sm border border-blue-600 p-2 text-stone-900 transition-colors hover:bg-blue-900 hover:text-white   "
            onClick={addTask}
            >
            +
          </button>
        </div>
        <ul className='mt-4'>
          {tasks.map((task, index) => (
            <TaskBar 
              key={index} 
              task={task} 
              index={index} 
              deleteTask={deleteTask} 
              editTask={editTask} 
            />
          ))}
        </ul>
      </div>

    </div>
  )
}