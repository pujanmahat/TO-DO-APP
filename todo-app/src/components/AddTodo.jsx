import React, { useState } from "react";

function AddTodo({onNewItem}) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value)
  };

  const handleAddButtonClicked=(event)=>{
      onNewItem(todoName,dueDate)
      setDueDate('')
      setTodoName('')
  }
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="Date" onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button
          " onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
