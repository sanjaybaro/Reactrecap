// TodoList.js

import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'incomplete'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data);
        console.log(data);
      } catch (error) {
        setError('Error fetching todos');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const filteredTodos = filter === 'all'
    ? todos
    : todos.filter(todo => (filter === 'completed' ? todo.completed : !todo.completed));

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <label>
        Filter by:
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </label>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
