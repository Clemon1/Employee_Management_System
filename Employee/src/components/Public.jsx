import React, { useState } from "react";
import "./dash.css";

const Public = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login__page">
      <form className="form__login">
        <div className="form__login-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__login-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="form__login-button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Public;
