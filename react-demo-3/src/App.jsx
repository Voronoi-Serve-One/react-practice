import React from "react";
import useFetch from "./components/useFetch";

const App = () => {
  const { data, isLoading, error, refetch } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
  );

  return (
    <div>
      <h1>The Meals</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>An Error Occured: {error}</p>}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          rowGap: 20,
          flexWrap: "wrap",
        }}
      >
        {data?.meals?.map((each) => (
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#333",
              color: "white",
              maxWidth: "400px",
              padding: 20,
              width: "100%",
            }}
            key={each.idMeal}
          >
            <p>{each.strMeal}</p>
            <img style={{ width: "100%" }} src={each.strMealThumb} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
