import React, { useEffect, useReducer, useRef, useState } from "react";

const initialState = {
  isrunning: false,
  records: [],
  seconds: 0,
  minutes: 0,
  hours: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "start": {
      return { ...state, isrunning: true };
    }
    case "tick": {
      let { seconds, minutes, hours } = state;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      return { ...state, seconds, minutes, hours };
    }
    case "setrecord": {
      const record = {
        id: Date.now(),
        time: action.value,
      };
      return { ...state, records: [...state.records, record] };
    }
    case "reset": {
      return initialState;
    }
    case "stop": {
      return { ...state, isrunning: false };
    }
    default: {
      return state;
    }
  }
};
const Timer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (!state.isrunning) return;
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [state.isrunning]);
  const recordElement = useRef(null);
  return (
    <div>
      <h1>Timer</h1>
      <p ref={recordElement}>
        {String(state.hours).padStart(2, "0")}:
        {String(state.minutes).padStart(2, "0")}:
        {String(state.seconds).padStart(2, "0")}
      </p>
      {state.records.length === 0 ? (
        <p>No Records Yet</p>
      ) : (
        <ul>
          {state.records.map((record, index) => (
            <li key={record.id}>
              {index + 1} ----- {record.time}
            </li>
          ))}
        </ul>
      )}
      {state.isrunning && (
        <button
          onClick={() =>
            dispatch({
              type: "setrecord",
              value: recordElement.current.innerText,
            })
          }
        >
          Mark
        </button>
      )}

      <div>
        <button onClick={() => dispatch({ type: "start" })}>Start</button>
        <button onClick={() => dispatch({ type: "reset" })}>
          Reset Record & Timer
        </button>
        <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
