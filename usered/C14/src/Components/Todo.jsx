import React from "react";
import { useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

//reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const updatedState = [...state, action.payload];
      return updatedState;
    }
    case "TOGGLE_TODO": {
      const updatedTodos = state.map((el) =>
        el.id === action.payload ? { ...el, status: !el.status } : el
      );
      return updatedTodos;
    }
    case "DELETE_TODO": {
      const updatedTodos = state.filter((el) => el.id !== action.payload);
      return updatedTodos;
    }
    default: {
      throw new Error("invalid action type", action.type);
    }
  }
};

function Todo() {
  const [state, dispatch] = useReducer(reducer, []);

  //Add Todo
  const addTodo = (newItem) => {
    dispatch({ type: "ADD_TODO", payload: newItem });
  };
  //Toggle Todo
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };
  //Delete Todo
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      {state.map((item) => (
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
