import React, { useState } from "react";
import PropTypes from "prop-types";

function Login({ dispatch }) {
  const [username, setUsername] = useState("");

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN", username });
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        value={username}
        onChange={handleUsername}
        name="login-username"
        id="login-username"
      />
      <label htmlFor="login-password">Password:</label>
      <input type="text" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func,
};

export default Login;
