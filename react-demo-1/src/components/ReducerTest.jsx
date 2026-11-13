import React, { useReducer } from "react";

const initialState = {
  username: "",
  password: "",
  error: "",
  loading: false,
  success: false,
};
const ReducerTest = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "field": {
        return { ...state, [action.name]: action.value };
      }
      case "submit_start": {
        return { ...state, loading: true, success: false, error: "" };
      }
      case "submit_success": {
        return { ...state, loading: false, success: true };
      }
      case "submit_failed": {
        return {
          ...state,
          loading: false,
          success: false,
          error: action.message,
        };
      }
      case "reset": {
        return initialState;
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ type: "field", name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit_start" });
    setTimeout(() => {
      if (state.username === "Justin" && state.password === "mypassword") {
        dispatch({ type: "submit_success" });
      } else {
        dispatch({ type: "submit_failed", message: "Wrong Credentials" });
      }
    }, 1000);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          placeholder="Username"
          value={state.username}
        />
        <br />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          value={state.password}
        />
        <br />
        {state.loading ? (
          <p>Loading...</p>
        ) : (
          <>{state.success ? <p>Log in Success</p> : <p>{state.error}</p>}</>
        )}

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default ReducerTest;
