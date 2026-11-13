import React from "react";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (item) => {
    const tempArr = todos.filter((each) => each.id != item);
    setTodos(tempArr);
  };
  const handleMark = (item) => {
    setTodos(
      todos.map((todo) =>
        item === todo.id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };
  return !todos || todos.length === 0 ? (
    <div className="my-8 text-center">
      <p className="text-zinc-200/60">No Todos Yet</p>
    </div>
  ) : (
    <div className="my-8 flex flex-col gap-4">
      {todos.map((todo, index) => (
        <div className="flex gap-2">
          <span className="flex items-center text-lg font-semibold px-2">
            {index + 1}.
          </span>
          <div
            className={`${!todo.done ? "bg-red-500/20 hover:bg-red-500/40 border-red-500 hover:border-red-400" : "bg-green-500/20 hover:bg-green-500/40 border-green-500 hover:border-green-400"} border-l-8 border  px-2 py-4 sm:px-4 flex justify-between flex-1 rounded-sm transition-colors duration-300`}
            key={todo.id}
          >
            <p className="font-semibold">{todo.content}</p>
            <div className="flex gap-2 sm:gap-6">
              <button onClick={() => handleMark(todo.id)}>
                {!todo.done ? (
                  <FaCheck className="w-5 h-5 hover:scale-120" />
                ) : (
                  <FaCheck
                    className="text-green-500 hover:text-green-400 w-5 h-5 hover:scale-120"
                    size={24}
                  />
                )}
              </button>
              <button onClick={() => handleDelete(todo.id)}>
                <MdDelete
                  className="text-red-500 w-6 h-6 hover:scale-120"
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
