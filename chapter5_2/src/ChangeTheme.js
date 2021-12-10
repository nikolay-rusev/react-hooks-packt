import React from "react";
import PropTypes from "prop-types";

const THEMES = [
  {
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  },
  {
    primaryColor: "orchid",
    secondaryColor: "mediumseagreen",
  },
];

function ThemeItem({ theme, active, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        paddingLeft: 8,
        fontWeight: active ? "bold" : "normal",
      }}
    >
      <span style={{ color: theme.primaryColor }}>Primary</span> / <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  );
}

ThemeItem.propTypes = {
  theme: PropTypes.object,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

function ChangeTheme({ theme, setTheme }) {
  function isActive(t) {
    return (
      t.primaryColor === theme.primaryColor &&
      t.secondaryColor === theme.secondaryColor
    );
  }

  return (
    <div>
      Change theme:
      {THEMES.map((t, i) => (
        <ThemeItem
          key={"theme-" + i}
          theme={t}
          active={isActive(t)}
          onClick={() => setTheme(t)}
        />
      ))}
    </div>
  );
}

ChangeTheme.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func,
};

export default ChangeTheme;
