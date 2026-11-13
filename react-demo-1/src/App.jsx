// import { React, useState } from "react";

// const App = () => {
//   const [friends, setFriends] = useState(["John", "Mike", "Killian"]);
//   const [movie, setMovie] = useState({
//     title: "Spiderman",
//     rating: 8,
//   });
//   const handleAddFriend = () => {
//     setFriends([...friends, "Elaijah"]);
//   };
//   const handleRemoveFriend = () => {
//     setFriends(friends.filter((friend) => friend != "Mike"));
//   };
//   const handleUpdateFriend = () => {
//     setFriends(
//       friends.map((friend) =>
//         friend === "Elaijah" ? "Elaijah Zapanta" : friend,
//       ),
//     );
//   };
//   const handleUpdateRatings = () => {
//     const copyMovie = {
//       ...movie,
//       rating: 8.7,
//     };
//     setMovie(copyMovie);
//   };
//   return (
//     <div>
//       <ul>
//         {friends.map((friend) => (
//           <li key={friend}>{friend}</li>
//         ))}
//       </ul>
//       <button onClick={handleAddFriend}>Add new Friend</button>
//       <button onClick={handleRemoveFriend}>Remove a Friend</button>
//       <button onClick={handleUpdateFriend}>Update a Friend</button>
//       <div>
//         <h1>Title: {movie.title}</h1>
//         <p>Ratings: {movie.rating}</p>
//         <button onClick={handleUpdateRatings}>Update Ratings</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [movies, setMovies] = useState([
//     { id: 1, title: "Spider Man", ratings: 8 },
//     { id: 2, title: "The Boys", ratings: 8.9 },
//   ]);
//   const handleAddMovie = () => {
//     const newMovie = {
//       id: 3,
//       title: "Daredevil",
//       ratings: 9,
//     };
//     setMovies([...movies, newMovie]);
//   };
//   const handleRemoveMovie = () => {
//     setMovies(movies.filter((movie) => movie.id !== 1));
//   };
//   const handleChangeName = () => {
//     setMovies(
//       movies.map((movie) =>
//         movie.id === 3 ? { ...movie, title: "Punisher" } : movie,
//       ),
//     );
//   };
//   return (
//     <div>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             Title: {movie.title} Ratings: {movie.ratings}
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleAddMovie}>Add a Movie</button>
//       <button onClick={handleRemoveMovie}>Remove a Movie</button>
//       <button onClick={handleChangeName}>Change Name</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import ComponentOne from "./components/ComponentOne";
// import ComponentTwo from "./components/ComponentTwo";

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const handleIncrement = () => {
//     setCounter((prev) => prev + 1);
//   };
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <ComponentOne handleIncrement={handleIncrement} />
//       <ComponentTwo handleIncrement={handleIncrement} />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import ExampleOne from "./components/ExampleOne";
// import ExampleThree from "./components/ExampleThree";
// import Counter from "./components/Counter";
// import TodoList from "./components/TodoList";
// import Profile from "./components/Profile";
// import ShoppingList from "./components/ShoppingList";

// const App = () => {
//   return (
//     <div>
//       <ShoppingList />
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import CopyInput from "./components/CopyInput";

// const App = () => {
//   return (
//     <div>
//       <CopyInput />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import ExampleItem from "./components/ExampleItem";

// const App = () => {
//   return (
//     <div>
//       <ExampleItem />
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import { useState, useEffect } from "react";
// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("Called useEffect()");
//     document.title = `Increment ${value}`;
//   }, [value]);
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={() => setValue((prev) => prev + 1)}>Increment</button>
//       <button onClick={() => setValue((prev) => prev - 1)}>Decrement</button>
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [load, setLoad] = useState(false);
//   useEffect(() => {
//     async function getData() {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users",
//         );
//         if (!response.ok) {
//           console.log("Error Occured");
//         }
//         const data = await response.json();
//         if (data && data.length) {
//           setData(data);
//         }
//       } catch (error) {
//         console.log(`Error: ${error}`);
//       }
//     }
//     getData();
//   });
//   const loadUsers = () => {
//     setLoad((prev) => !prev);
//   };
//   return (
//     <div>
//       {load && (
//         <ul>
//           {data.map((each) => (
//             <li key={each.id}>{each.name}</li>
//           ))}
//         </ul>
//       )}
//       {load ? (
//         <button onClick={loadUsers}>Unload Users</button>
//       ) : (
//         <button onClick={loadUsers}>Load Users</button>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [showUsers, setShowUsers] = useState(false);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     async function getData() {
//       if (showUsers) {
//         try {
//           setLoading(true);
//           const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users",
//           );
//           const data = await response.json();
//           console.log(data);
//           if (data && data.length) setData(data);
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setData([]);
//       }
//     }
//     getData();
//   }, [showUsers]);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       <ul>
//         {data.map((each) => (
//           <li key={each.id}>{each.name}</li>
//         ))}
//       </ul>
//       <button onClick={() => setShowUsers((prev) => !prev)}>
//         {showUsers ? "Hide Data" : "Load Data"}
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import BasicEffect from "./components/BasicEffect";
// import CounterEffect from "./components/CounterEffect";
// import FetchDataEffect from "./components/FetchDataEffect";

// const App = () => {
//   return (
//     <div>
//       <BasicEffect />
//       <CounterEffect />
//       <FetchDataEffect />
//     </div>
//   );
// };

// export default App;

// import React, { createContext, useState } from "react";
// import CompA from "./components/CompA";
// export const Data = createContext();
// const App = () => {
//   const [user, setUser] = useState({
//     name: "Justin",
//     age: 19,
//     course: "BSIT",
//   });
//   return (
//     <Data.Provider value={user}>
//       <div>
//         <CompA />
//       </div>
//     </Data.Provider>
//   );
// };

// export default App;

// import React from "react";
// import UserContext from "./components/UserContext";

// const App = () => {
//   return (
//     <div>
//       <UserContext />
//     </div>
//   );
// };

// export default App;

// import React, { useReducer } from "react";

// const initialState = { count: 0 };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment": {
//       return { ...state, count: state.count + 1 };
//     }
//     case "decrement": {
//       return { ...state, count: state.count - 1 };
//     }
//     case "reset": {
//       return { ...state, count: 0 };
//     }
//   }
// };
// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import ReducerTest from "./components/ReducerTest";

// const App = () => {
//   return (
//     <div>
//       <ReducerTest />
//     </div>
//   );
// };

// export default App;

// import ReducerTodo from "./components/ReducerTodo";

// const App = () => {
//   return (
//     <div>
//       <ReducerTodo />
//     </div>
//   );
// };

// export default App;

// import React, { useRef } from "react";

// const App = () => {
//   const inputElement = useRef(null);
//   const focusInput = () => {
//     inputElement.current.focus();
//     inputElement.current.value = "Justin";
//   };
//   return (
//     <div>
//       <input type="text" ref={inputElement} />
//       <button onClick={() => focusInput()}>Focus and Write My Name</button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import FocusInput from "./components/FocusInput";
// import Timer from "./components/Timer";

// const App = () => {
//   return (
//     <div>
//       <FocusInput />
//       <Timer />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import useFetch from "./components/useFetch";

// const App = () => {
//   const { isloading, data, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts",
//   );
//   return (
//     <div>
//       {isloading ? (
//         <p>Loading...</p>
//       ) : (
//         !error && (
//           <ul>
//             {data && data.map((each) => <li key={each.id}>{each.title}</li>)}
//           </ul>
//         )
//       )}
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import useFetch from "./components/useFetch";

// const App = () => {
//   const { isloading, error, data } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts",
//   );
//   return (
//     <div>
//       <h1>Custom Hooks</h1>
//       <p>POSTS</p>
//       {isloading && <p>Loading...</p>}
//       {error ? (
//         <p>Error Occured {error}</p>
//       ) : (
//         <ul>
//           {data.map((each) => (
//             <li key={each.id}>{each.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App;

// import NoteData from "./components/NoteData";
// import NoteModal from "./components/NoteModal";
// import React, { useReducer } from "react";
// import useToggle from "./useToggle";
// const initialState = {
//   title: "",
//   note: "",
//   error: {
//     text: "",
//     target: "",
//   },
//   notes: [],
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "handle_input": {
//       if (action.input_type === "title") {
//         return { ...state, title: action.value };
//       }
//       if (action.input_type === "note") {
//         return { ...state, note: action.value };
//       }
//     }
//     case "add_note": {
//       const id = Date.now();
//       const date = new Date(id).toLocaleDateString();
//       const note = {
//         id: id,
//         title: state.title,
//         note: state.note,
//         date: date,
//       };
//       return { ...state, title: "", note: "", notes: [...state.notes, note] };
//     }
//     case "delete_note": {
//       const data = state.notes.filter((each) => each.id != action.id);
//       return { ...state, notes: data };
//     }
//   }
// };
// const init = (state) => {
//   const data = localStorage.getItem("notes");
//   return { ...state, notes: data ? JSON.parse(data) : [] };
// };
// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState, init);
//   const [isOpen, toggleOpen] = useToggle();
//   return (
//     <div>
//       <NoteData dispatch={dispatch} data={state.notes} />
//       <button onClick={toggleOpen}>Add new Notes</button>
//       {isOpen && <NoteModal dispatch={dispatch} state={state} />}
//     </div>
//   );
// };

// export default App;
// import React, { useReducer } from "react";
// import useToggle from "./components/useToggle";
// import NoteModal from "./components/NoteModal";

// const initialState = {
//   title: "",
//   note: "",
//   mode: "",
//   editingID: null,
//   data: [],
// };
// const init = (state) => {
//   return {
//     ...state,
//     data: () => {
//       const data = localStorage.getItem("notes");
//       return data ? JSON.parse(data) : [];
//     },
//   };
// };
// const reducer = (state, action) => {
//   return;
// };
// const App = () => {
//   const [noteModal, toggleNoteModal] = useToggle();
//   const [state, dispatch] = useReducer(reducer, initialState, init);
//   return (
//     <div>
//       <h1>Note Taker</h1>
//       <NoteModal noteModal={noteModal} />
//       <button onClick={() => toggleNoteModal()}>Add New Note</button>
//     </div>
//   );
// };

// export default App;

import React from "react";
import UniqueId from "./components/UniqueId";

const App = () => {
  return (
    <div>
      <UniqueId />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        rem repudiandae natus consequuntur id magnam perspiciatis, earum
        laudantium, corrupti nisi, officia vel est. Perferendis omnis ea aliquid
        officia ab? Voluptatibus!
      </p>
      <UniqueId />
    </div>
  );
};

export default App;
