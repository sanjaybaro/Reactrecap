import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todo() {
  const [todos, setTodos] = useState([]);
  //event handler here is handleclicked

  const handleAddTodo = (text) => {
    //creating a todo item
    const todoItem = {
      id: Math.random() + 1,
      title: text,
      status: false,
    };
    // console.log(todoItem);
    const updatedTodos = [...todos, todoItem];
    // console.log(updatedTodos);
    setTodos(updatedTodos);
    // setInputVal("");
  };

  //TOGGLE todo status js

  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      } else {
        return item;
      }
    });
    setTodos(updatedTodos);
  };

  //DELETE todo item
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item) => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div
      style={{
        border: "2px solid green",
        padding: "6px",
        backgroundColor: "#78859c",
      }}
    >
      <div>
        <AddTodo handleprop={handleAddTodo} />
      </div>
      <div>
        {todos.map((el) => (
          <TodoItem key={el.id} {...el} handleToggle={handleToggle} handleDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}

export default Todo;
