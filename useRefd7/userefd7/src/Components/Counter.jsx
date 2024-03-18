import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  // Determine the CSS class for the buttons based on the count value
  const incButtonClass = count >= 10 ? "button-red" : "";
  const decButtonClass = count <= 0 ? "button-red" : "";

  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={handleInc}
        disabled={count >= 10}
        className={incButtonClass}
      >
        INC
      </button>
      <button
        onClick={handleDec}
        disabled={count <= 0}
        className={decButtonClass}
      >
        DEC
      </button>
    </div>
  );
};

export default Counter;
