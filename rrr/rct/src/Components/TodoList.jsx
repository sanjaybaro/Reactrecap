import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'incomplete'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'incomplete') {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div>
          <label>
            Filter:
            <select value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </label>
          <ul>
            {filteredTodos.map((todo) => (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.completed} readOnly />
                <span>{todo.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
