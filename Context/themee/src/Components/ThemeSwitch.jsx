import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitch = () => {
  const { toggleTheme,theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px",
        backgroundColor: theme === "light" ? "#70adc7" : "#cbd6cc",
        color: theme === "light" ? "#bb2222" : "#8ab147", // Set text color based on your preference
        border: "none",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeSwitch;
