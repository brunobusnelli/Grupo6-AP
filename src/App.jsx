import React, { useEffect, useState } from 'react';
import { TasksForm, TasksList } from './components';

function App() {
  const [searchString, setSearchString] = useState('');
  const [tasks, setTasks] = useState([]);
  const [currentTasks, setCurrentTask] = useState([]);

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    updateCurrentTasks(storedTasks, searchString);
  }, []); // Se ejecuta solo al montar el componente

  useEffect(() => {
    updateCurrentTasks(tasks, searchString);
  }, [searchString, tasks]); // Se ejecuta cuando cambia searchString o tasks

  const updateCurrentTasks = (tasksArray, filter) => {
    const filteredTasks = tasksArray.filter(
      (task) =>
        task.title.toLowerCase().includes(filter.toLowerCase()) ||
        task.description.toLowerCase().includes(filter.toLowerCase())
    );
    setCurrentTask(filteredTasks);
  };

  const handleChangeSearchString = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <h1 className="text-center mb-5 task-list-title">Mi lista de tareas</h1>
      <form>
        <label>Busca tu tarea:</label>
        <input
          placeholder="Ingresa algo para filtrar"
          onChange={handleChangeSearchString}
          value={searchString}
        />
      </form>
      <TasksForm addTask={addTask} />
      <TasksList tasks={currentTasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
