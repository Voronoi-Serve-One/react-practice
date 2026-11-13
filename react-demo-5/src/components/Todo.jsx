import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("myTodos");
    return localTodos ? JSON.parse(localTodos) : [];
  });
  const [index, setIndex] = useState(0);
  const todoSuggestions = [
    "Do laundry...",
    "Walk the dog...",
    "Throw the trash...",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % todoSuggestions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      setError("Input Field Empty");
      return;
    }
    setInput("");
    setTodos([...todos, { id: Date.now(), content: input, done: false }]);
    setError("");
  };
  return (
    <div className="max-w-xl">
      {error && <p>{error}</p>}
      <div className="bg-zinc-800 py-4 px-2 sm:px-4 rounded-md border border-zinc-700">
        <form
          className="flex flex-col sm:flex-row gap-2 sm:gap-4"
          onSubmit={handleSubmit}
        >
          <div className="relative flex-1 font-medium">
            <input
              className="outline-none w-full bg-zinc-900 hover:border-zinc-600 py-2 px-4 border-zinc-700 rounded-md border text-zinc-200/80"
              type="text"
              value={input}
              onChange={handleChange}
            />
            {!input && (
              <span className="absolute left-4.5 top-2.5 text-zinc-700 pointer-events-none">
                {todoSuggestions[index]}
              </span>
            )}
          </div>
          <button
            className="bg-blue-500/20 hover:bg-blue-500/40 px-4 py-1 rounded-md border border-blue-500 font-medium text-zinc-200"
            type="submit"
          >
            Add To Do
          </button>
        </form>
      </div>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
