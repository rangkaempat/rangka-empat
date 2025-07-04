// ThemeContext (Dark/Light Mode)
// Description: Provides dark/light mode state using React Context.
// Features:
// - Saves user preference in localStorage
// - Applies "sectionDark" or "sectionLight" class to <body>
// How to Use:
// 1. Wrap your App in <ThemeProvider>
// 2. Access via: const { darkMode } = useContext(ThemeContext);

import { createContext, useState, useEffect } from "react";

// Create the context
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = darkMode ? "sectionDark" : "sectionLight";
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
