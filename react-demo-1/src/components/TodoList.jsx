import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, input]);
  };
  const handleClearTodos = (e) => {
    e.preventDefault();
    setTodos([]);
  };

  return (
    <div>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      ) : (
        <p>No Current Todo/s</p>
      )}

      <form>
        <input
          type="text"
          placeholder="What to do Today?"
          value={input}
          onChange={handleInput}
        />
        <button onClick={handleClick}>Add</button>
        <button onClick={handleClearTodos}>Clear Todos</button>
      </form>
    </div>
  );
};

export default TodoList;
