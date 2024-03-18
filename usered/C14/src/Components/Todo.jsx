import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todo() {
  const [todos, setTodos] = useState([]);

  //Add Todo
  const addTodo = (newItem) => {
    const updatedTodos = [...todos, newItem];
    setTodos(updatedTodos);
  };
  //Toggle Todo
  const handleToggle = (id) => {
    const updatedTodos = todos.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    setTodos(updatedTodos);
    console.log(updatedTodos);
  };
  //Delete Todo
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((el) => el.id !== id);
    setTodos(updatedTodos);
    console.log(updatedTodos);
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Todo;
