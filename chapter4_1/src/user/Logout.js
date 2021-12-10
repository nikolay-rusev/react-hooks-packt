import React from "react";
import PropTypes from "prop-types";

function Logout({ user, setUser }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUser("");
      }}
    >
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}

Logout.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func,
};

export default Logout;
