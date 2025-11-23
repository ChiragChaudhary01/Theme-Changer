import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
    const child = document.getElementById("child");
    if (theme === "light") {
      child.style.backgroundColor = "black";
      child.style.color = "white";
      child.style.boxShadow = "#000000 0px 0px 50px 5px";
    } else {
      child.style.backgroundColor = "white";
      child.style.color = "black";
      child.style.boxShadow = "#ffffff 0px 0px 50px 5px";
    }
  }, [theme, location]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
