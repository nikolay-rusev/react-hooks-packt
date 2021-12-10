import React from "react";
import PropTypes from "prop-types";

function Logout({ user, dispatch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
      }}
    >
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}

Logout.propTypes = {
  user: PropTypes.string,
  dispatch: PropTypes.func,
};

export default Logout;
