import React, { useContext } from "react";
import { UserProvider } from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserProvider);
  const { name, age } = user;
  return (
    <div>
      <h1>Profile</h1>
      {name || age ? (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      ) : (
        <p>No Profile yet</p>
      )}
    </div>
  );
};

export default UserProfile;
