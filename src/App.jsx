import {useState} from 'react'

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

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
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
            <li key={index} className='border-b border-gray-300 py-2 flex justify-between items-center'>
              <p>
                {task}
              </p>
              <button 
                className="mt-2 ml-2 border p-1 rounded-sm border-red-600 hover:bordr-red-900 hover:bg-gray-200 text-red-600 hover:text-red-900 " 
                onClick={() => deleteTask(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}