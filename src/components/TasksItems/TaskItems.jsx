import React from "react";
import "./TaskItems.css";
import dellBtn from './dellBtn.svg'
const TaskItem = ({ task, deleteTask }) => {
  return (
    <>
      <div className="container mt-3 task-item">
        <div className="row">
          <div className="d-flex">
            <div className="col-9">
              <h3 className="tasks-title">{task.title}</h3>
              <p>{task.description}</p>
              <span>{task.createdAt}</span>
            </div>
            <div className="col-3 d-flex">
              <button onClick={() => deleteTask(task.id)} className="dellBtn">
                <img src={dellBtn} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
