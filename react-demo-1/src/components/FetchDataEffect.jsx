import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        if (data && data.length) setData(data);
        console.log(data[1].title);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Title of the first Post</h1>
      {data.length > 1 ? <p>{data[1]?.title}</p> : <p>Loading...</p>}
    </div>
  );
};

export default FetchDataEffect;
