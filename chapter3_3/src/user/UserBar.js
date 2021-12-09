import React from "react";
import PropTypes from "prop-types";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

function UserBar({ user, setUser }) {
  if (user) {
    return <Logout user={user} setUser={setUser} />;
  } else {
    return (
      <React.Fragment>
        <Login setUser={setUser} />
        <Register setUser={setUser} />
      </React.Fragment>
    );
  }
}

UserBar.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func,
};

export default UserBar;
