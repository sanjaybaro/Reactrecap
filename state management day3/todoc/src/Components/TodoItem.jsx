/* eslint-disable react/prop-types */
import React from "react";

export default function TodoItem({
  title,
  id,
  status,
  handleToggle,
  handleDelete,
}) {
  return (
    <div>
      <div
        style={{ border: "1px dashed black", margin: "5px", padding: "5px" }}
      >
        <h4>
          {title} - {status ? "Completed" : "Not Completed"}
        </h4>

        <button onClick={() => handleToggle(id)}>TOGGLE</button>
        <button onClick={() => handleDelete(id)}>DELETE</button>
      </div>
    </div>
  );
}
