import React, { useRef, useState } from "react";

const FocusInputComponent = () => {
  const inputRef = useRef(null);
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    inputRef.current.focus();
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Focus Input</button>
      <p>Button clicked {clickCount} times.</p>
    </div>
  );
};

export default FocusInputComponent;


/*
Questions:
What is the useRef hook in React?

Explain the purpose and usage of the useRef hook in React.
How does the useRef hook differ from useState?

Discuss the differences between useRef and useState hooks in React.
When should you use the useRef hook?

Describe scenarios where using the useRef hook is beneficial compared to other hooks or methods in React.
Can you modify the value of a useRef object directly?

Explain whether it's possible to modify the value of a useRef object directly and why.
What is the difference between useRef and creating a reference using createRef()?

Compare useRef with createRef() in terms of usage and performance.
Machine Coding Question:
Question: Write a React component that utilizes the useRef hook to implement a simple input field with a button. Upon clicking the button, the component should focus on the input field. Additionally, display the number of times the button has been clicked.

Expected Output:

An input field with a button.
On clicking the button, the input field should be focused.
Display the number of times the button has been clicked.
*/