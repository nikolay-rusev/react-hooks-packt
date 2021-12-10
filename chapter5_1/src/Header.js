import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./App";

const Header = ({ text }) => {
  const theme = useContext(ThemeContext);
  return <h1 style={{ color: theme.primaryColor }}>{text}</h1>;
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
