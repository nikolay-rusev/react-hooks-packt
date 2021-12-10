import React from "react";
import PropTypes from "prop-types";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

function UserBar({ user, dispatch }) {
  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <React.Fragment>
        <Login dispatch={dispatch} />
        <Register dispatch={dispatch} />
      </React.Fragment>
    );
  }
}

UserBar.propTypes = {
  user: PropTypes.string,
  dispatch: PropTypes.func,
};

export default UserBar;
