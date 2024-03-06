import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormState(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formState.task !== "" && formState.taskAssignedTo !== "") {
      setTasks(prevTasks => [...prevTasks, formState]);
      setFormState({
        task: "",
        completed: false,
        taskAssignedTo: ""
      });
    } else {
      alert("Please fill in both task and assignee fields.");
    }
  }

  function handleDelete(index) {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  }

  function handleToggle(index) {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            name="task" 
            type="text" 
            placeholder="Add Task" 
            value={formState.task}
            onChange={handleChange} 
          />
          <label>
            Completed:
            <input 
              name="completed" 
              type="checkbox" 
              checked={formState.completed}
              onChange={handleChange} 
            />
          </label>
          <select 
            name="taskAssignedTo" 
            value={formState.taskAssignedTo}
            onChange={handleChange}
          >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem 
          key={index} 
          item={item} 
          onDelete={() => handleDelete(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </>
  );
}

export default App;