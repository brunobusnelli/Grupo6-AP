import React, { useEffect, useState } from 'react'

import { TasksForm, TasksList } from './components'

function App() {
  const [searchString, setSearchString] = useState('')

  //Este es el valor real de todas mis tareas actualmente
  const [tasks, setTasks] = useState([])

  //Este es para las tareas que muestro
  const [currentTasks, setCurrentTask] = useState([])
  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const addTask =  (newTask) =>{
    setTasks([...tasks, newTask])
  }
  

  useEffect(()=>{
    setCurrentTask(tasks.filter(task => 
      task.title.toLowerCase().includes(searchString.toLowerCase()) 
      ||
      task.description.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString, tasks])

  const handleChangeSearchString = (e) =>{
    setSearchString(e.target.value)

  }


   return (
    <>
    <h1 className='text-center mb-5'>Mi lista de tareas</h1>
    <form>
        <label>Busca tu tarea:</label>
        <input 
        placeholder='Ingresa algo para filtrar' 
        onChange={handleChangeSearchString}
        value={searchString}
        />
      </form>
      <TasksForm addTask={addTask}/>
      <TasksList tasks={currentTasks} deleteTask={deleteTask}/>

    </>
  )
}

export default App