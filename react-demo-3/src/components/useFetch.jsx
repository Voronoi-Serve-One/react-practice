import axios from "axios";
import React, { useCallback, useEffect, useReducer } from "react";

const initialState = {
  isLoading: false,
  error: "",
  data: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "start_fetch": {
      return { ...state, isLoading: true, error: "" };
    }
    case "error": {
      return { ...state, isLoading: false, error: action.value };
    }
    case "success": {
      return { ...state, isLoading: false, error: "", data: action.value };
    }
    default: {
      return state;
    }
  }
};
const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getData = useCallback(async () => {
    dispatch({ type: "start_fetch" });
    try {
      const res = await axios.get(url);
      dispatch({ type: "success", value: res.data });
    } catch (e) {
      dispatch({ type: "error", value: e.message });
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);
  return { ...state, refetch: getData };
};

export default useFetch;
