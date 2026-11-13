import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState();
  const [form, setForm] = useState({
    username: "",
    userage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleClick = () => {
    if (!form.userage || !form.username) return;
    setProfile(form);
  };
  return (
    <div>
      {profile ? (
        <p>
          Name: {profile.username} Age: {profile.userage}
        </p>
      ) : (
        <p>No Profiles Yet</p>
      )}

      <form>
        <input
          name="username"
          value={form.username}
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          name="userage"
          value={form.userage}
          type="text"
          placeholder="Enter your age"
          onChange={handleChange}
        />
        <button onClick={handleClick} type="button">
          Add Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
