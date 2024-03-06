
import React from "react";
import "./Task.css";

function TaskItem({ item, onDelete, onToggle }) {
  const { task, completed, taskAssignedTo } = item;

  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <div>{task}</div>
      <div>Assigned to: {taskAssignedTo}</div>
      <div>
        <button onClick={onDelete}>Delete Task</button>
        <button onClick={onToggle}>
          {completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
      </div>
    </div>
  );
}

export default TaskItem;