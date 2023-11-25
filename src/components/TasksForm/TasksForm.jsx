import React, { useState } from "react";
import './TasksForm.css'
import addBtn from './addBtn.svg'

const TaskForm = ({ addTask }) => {
  const handleAddNewTask = (e) => {
    e.preventDefault();
    const { title, description } = e.target;
    if (title.value && description.value) {
      addTask({
        title: title.value,
        description: description.value,
        id: Math.floor(Math.random() * 10000),
        createdAt: new Date().toLocaleString(),
      });
      title.value = '';
      description.value = '';
    }
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <form onSubmit={handleAddNewTask}>
            <div className="col-lg-6 col-md-6 d-flex flex-column gap-2">
                <input type="text" placeholder="Titulo..." id='title' name='title'/>
                <textarea type="text" placeholder="Descripcion..." id='description' name='description'/>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-2 d-flex align-items-center justify-content-center">
            <button type="submit" className="add">
                <img src={addBtn} alt="" className="img-fluid"/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
