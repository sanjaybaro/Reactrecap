import { useState } from "react";

import "./App.css";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log(inputVal);

  //event handler here is handleclicked

  const handleCLick = () => {
    console.log(inputVal);
    //creating a todo item
    const todoItem = {
      id: Math.random() + 1,
      title: inputVal,
      status: false,
    };
    // console.log(todoItem);
    const updatedTodos = [...todos, todoItem];
    // console.log(updatedTodos);
    setTodos(updatedTodos);
    setInputVal("");
  };
  console.log(todos);

  return (
    <div style={{ border: "2px solid green" ,padding:'6px'}}>
      <div className="App">
        <input
          placeholder="ADD TODO"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleCLick}>ADD TODO</button>
      </div>
      <div>
        {todos.map((el) => (
          <div
            key={el.id}
            style={{ border: "1px dashed black", margin: "5px" }}
          >
            <h4>
              {el.title} - {el.status ? "Completed" : "Not Completed"}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
