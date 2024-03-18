import React from "react";

const TodoItem = ({ id, title, status, handleToggle, handleDelete }) => {
  return (
    <div style={{ border: "2px dashed blue", margin: "5px", padding: "5px" }}>
      <p>{title}</p>
      <p>{status ? "COMPLETED" : "NOT COMPLETED"}</p>
      <button onClick={() => handleToggle(id)}>TOGGLE</button>
      <button onClick={() => handleDelete(id)}>DELETE</button>
    </div>
  );
};

export default TodoItem;
