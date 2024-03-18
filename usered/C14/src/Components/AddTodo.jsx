import React from "react";
import { useState } from "react";

function AddTodo({ addTodo }) {
  const [inpVal, setInputVal] = useState("");

  const newItem = {
    id: Math.random() + Date.now() + inpVal,
    title: inpVal,
    status: false,
  };

  const handleAdd = () => {
    addTodo(newItem);
    setInputVal("");
  };

  return (
    <div>
      <input
        placeholder="please type here"
        value={inpVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />

      <button onClick={handleAdd} style={{ marginLeft: "5px" }}>
        ADD
      </button>
    </div>
  );
}

export default AddTodo;
