import React, { useContext, useEffect, useState } from "react";
import { UserProvider } from "./UserContext";

const UpdateUser = () => {
  const { setUser } = useContext(UserProvider);
  const [form, setForm] = useState({ name: "", age: "" });
  const [error, setError] = useState(false);
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (!form.name || !form.age) {
      setError(true);
    } else {
      setError(false);
    }
  }, [form]);
  const handleUpdate = (e) => {
    e.preventDefault();
    if (error) return;
    setUser(form);
    setForm({ name: "", age: "" });
  };
  return (
    <div>
      {error && <p>Please Fill the Field</p>}
      <form onSubmit={handleUpdate}>
        <input
          placeholder="Name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
        <input
          placeholder="Age"
          name="age"
          type="text"
          onChange={handleForm}
          value={form.age}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateUser;
