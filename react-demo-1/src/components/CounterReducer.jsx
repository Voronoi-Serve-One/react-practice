import React, { useReducer } from "react";

const initialState = {
  count: 0,
  input: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { ...state, count: state.count + 1 };
    }

    case "decrement": {
      return { ...state, count: state.count - 1 };
    }
    case "setinput": {
      return { ...state, input: action.value };
    }
    case "setcount": {
      return { ...state, count: Number(state.input) };
    }
    case "setincrement": {
      return { ...state, count: state.count + Number(state.input) };
    }
    case "setdecrement": {
      return { ...state, count: state.count - Number(state.input) };
    }
    case "reset": {
      return { ...state, count: 0 };
    }

    default: {
      return state;
    }
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ type: "setinput", value: e.target.value });
  };
  const handleSetCount = () => {};
  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <input
        type="text"
        placeholder="Enter Any Number"
        onChange={handleChange}
        value={state.input}
      />{" "}
      <button onClick={() => dispatch({ type: "setcount" })}>Set</button>
      <button onClick={() => dispatch({ type: "setincrement" })}>
        Set Increment
      </button>
      <button onClick={() => dispatch({ type: "setdecrement" })}>
        Set Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterReducer;
