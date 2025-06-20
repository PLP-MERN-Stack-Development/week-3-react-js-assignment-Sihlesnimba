import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
