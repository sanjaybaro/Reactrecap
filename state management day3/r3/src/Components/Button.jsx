import React from "react";

const Button = ({ btnc, c }) => {
  return (
    <div>
      {/* <h2>Count Clicked {count}</h2> */}
      <button onClick={btnc}>Button clicked {c} times</button>
    </div>
  );
};

export default Button;
