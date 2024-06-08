import { useState, createContext } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [menu, setMenu] = useState(false);

  function toggleSidebar() {
    setSidebar(true);
  }
  function toggleMenu() {
    setMenu(!menu);
  }

  const value = {
    sidebar,
    setSidebar,
    toggleSidebar,
    menu,
    toggleMenu,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
};

export { ThemeProvider, ThemeContext };
