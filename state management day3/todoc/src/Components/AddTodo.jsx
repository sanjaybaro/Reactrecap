/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

function AddTodo({ handleprop }) {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <div>
        <input
          placeholder="ADD TODO"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          onClick={() => {
            handleprop(inputVal);
            setInputVal("");
          }}
        >
          ADD TODO
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
