import React from "react";
import Todo from "./components/Todo";
import "./style.css";
const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-zinc-200">
      <header className="bg-zinc-800 border-b border-zinc-700">
        <div className="max-w-5xl mx-auto p-4">
          <div>
            <h1 className="text-2xl font-medium">Todo List</h1>
          </div>
        </div>
      </header>
      <main className="p-4 max-w-5xl mx-auto">
        <div className="my-4">
          <h1 className="text-4xl font-medium">Todo List</h1>
          <p className="text-zinc-200/60">
            Add your todo list, mark them done and call it a day!
          </p>
        </div>

        <Todo />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
