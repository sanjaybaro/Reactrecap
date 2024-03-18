/*Problem Statement: Create a React component that displays an input field and a button. 
When the button is clicked, the text entered in the input field should be appended to a
 list below. Use the useRef hook to manage the list.

Expected Output:

An input field and a button.
Clicking the button appends the text from the input field to a list below.
Use the useRef hook to manage the list
*/

import React, { useRef, useState } from "react";

const TextInputComponent = () => {
  const inputRef = useRef(null);
  const listRef = useRef([]);
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = inputRef.current.value;
    if (newItem) {
      listRef.current.push(newItem);
      setItems([...listRef.current]);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TextInputComponent;
