import React, { useContext } from "react";
import { ThemeContext } from "./contexts";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  const { primaryColor } = useContext(ThemeContext);
  return <h1 style={{ color: primaryColor }}>{text}</h1>;
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
