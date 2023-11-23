import React from 'react';
import TasksItems from '../TasksItems/TaskItems';
import './TasksList.css'

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (<>
        <h3 className='text-center mt-4 no-tasks'>No tienes tareas, agrega una nueva</h3>
      </>
      ) : (
        <div className='row'>
          {tasks.map((task) => (
            <div key={task.id} className="col-lg-4 mb-3">
              <TasksItems task={task} deleteTask={deleteTask} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;

