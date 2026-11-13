import React, { createContext, useState } from "react";
import UserProfile from "./UserProfile";
import UpdateUser from "./UpdateUser";
export const UserProvider = createContext(null);
const UserContext = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });
  return (
    <div>
      <UserProvider.Provider value={{ user, setUser }}>
        <UserProfile />
        <UpdateUser />
      </UserProvider.Provider>
    </div>
  );
};

export default UserContext;
