import React, { useReducer } from "react";

const initialState = {
  todos: [],
  input: "",
  error: "",
  notify: "",
  filter: "all",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "input": {
      return { ...state, input: action.value };
    }
    case "submit_fail": {
      return { ...state, error: action.errortext };
    }
    case "add_todo": {
      const todo = {
        id: Date.now(),
        text: state.input,
        completed: false,
      };

      return { ...state, todos: [...state.todos, todo], error: "", input: "" };
    }
    case "delete_todo": {
      const tempArr = state.todos.filter((prev) => action.todo !== prev.id);
      return { ...state, todos: tempArr };
    }
    case "mark_todo": {
      const marked = state.todos.map((todo) => {
        if (todo.id === action.todo) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { ...state, todos: marked };
    }
    case "filter_todo": {
      return { ...state, filter: action.filter };
    }
  }
};

const ReducerTodo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleInput = (e) => {
    dispatch({ type: "input", value: e.target.value });
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (state.input === "") {
      dispatch({ type: "submit_fail", errortext: "Please Enter Something" });
      return;
    }
    dispatch({ type: "add_todo" });
  };
  let filteredTodo = state.todos.filter((todo) => {
    if (state.filter === "completed") return todo.completed;
    if (state.filter === "active") return !todo.completed;
    return true;
  });
  return (
    <div>
      {state.error && <p>{state.error}</p>}
      <button onClick={() => dispatch({ type: "filter_todo", filter: "all" })}>
        All
      </button>
      <button
        onClick={() => dispatch({ type: "filter_todo", filter: "active" })}
      >
        Active
      </button>
      <button
        onClick={() => dispatch({ type: "filter_todo", filter: "completed" })}
      >
        Completed
      </button>
      {filteredTodo.length === 0 && <p>No Results Found</p>}
      {state.todos && state.todos.length > 0 ? (
        <div>
          <ul>
            {filteredTodo.map((todo) => (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
                <button
                  onClick={() =>
                    dispatch({ type: "delete_todo", todo: todo.id })
                  }
                >
                  Delete
                </button>
                <button
                  onClick={() => dispatch({ type: "mark_todo", todo: todo.id })}
                >
                  {todo.completed ? "Unmark as Done" : "Mark as Done"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No Todos yet</p>
      )}

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={handleInput}
          value={state.input}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ReducerTodo;
