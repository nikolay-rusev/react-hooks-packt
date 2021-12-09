import React from "react";
import PropTypes from "prop-types";

function Logout({ user }) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout" />
        </form>
    )
}

Logout.propTypes = {
    user: PropTypes.string
}

export default Logout