/*Problem Statement: Implement a React component that renders a list of items. 
Each item should have a button next to it. When the button of a particular item is clicked, 
the background color of that item should change, indicating it has been selected. 
Use the useRef hook to manage the selected items.

Expected Output:

Render a list of items.
Each item should have a button.
Clicking the button of an item should change its background color.
Use the useRef hook to manage selected items.
*/

import React, { useRef } from "react";

const ItemListComponent = () => {
  const selectedItems = useRef([]);

  const handleItemClick = (index) => {
    const item = selectedItems.current[index];
    if (item) {
      item.style.backgroundColor = "green";
    }
  };

  return (
    <div>
      <ul>
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index} ref={(el) => (selectedItems.current[index] = el)}>
            Item {index + 1}
            <button onClick={() => handleItemClick(index)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListComponent;

/*This component renders a list of items with buttons next to each item. 
Clicking a button changes the background color of the respective item,
 utilizing the useRef hook to store references to the DOM elements representing each item.*/