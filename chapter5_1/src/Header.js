import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./App";

const Header = ({ text }) => (
  <ThemeContext.Consumer>
    {(theme) => <h1 style={{ color: theme.primaryColor }}>{text}</h1>}
  </ThemeContext.Consumer>
);

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
