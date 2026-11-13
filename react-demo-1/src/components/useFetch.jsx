import React, { act, useEffect, useReducer } from "react";

const initialState = {
  isloading: false,
  error: "",
  data: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "start_fetch": {
      return { ...state, isloading: true, error: "" };
    }
    case "fetch_failed": {
      return { ...state, isloading: false, error: action.error };
    }
    case "fetch_success": {
      return { ...state, isloading: false, error: "", data: action.data };
    }
    default: {
      return state;
    }
  }
};
const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function getData() {
      dispatch({ type: "start_fetch" });
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
          dispatch({ type: "fetch_success", data });
        }
      } catch (error) {
        dispatch({ type: "fetch_failed", error });
      }
    }
    getData();
  }, [url]);

  return state;
};

export default useFetch;

// import { useState, useReducer, useEffect } from "react";

// const initialState = {
//   isloading: false,
//   error: "",
//   data: [],
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "start_fetch": {
//       return { ...state, isloading: true, error: "" };
//     }
//     case "fetch_success": {
//       return { ...state, isloading: false, error: "", data: action.data };
//     }
//     case "fetch_failed": {
//       return { ...state, isloading: false, error: action.error };
//     }
//     default: {
//       return state;
//     }
//   }
// };
// const useFetch = (url) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   useEffect(() => {
//     async function getData() {
//       dispatch({ type: "start_fetch" });
//       try {
//         const res = await fetch(url);
//         const data = await res.json();

//         if (data && data.length > 0) {
//           dispatch({ type: "fetch_success", data: data });
//         }
//       } catch (error) {
//         dispatch({ type: "fetch_failed", error: error });
//       }
//     }
//     getData();
//   }, [url]);

//   return state;
// };

// export default useFetch;
