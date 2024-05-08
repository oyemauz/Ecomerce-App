import { useState, createContext } from 'react';
import PropTypes from 'prop-types'

// Create a context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const[menu,setmenu]=useState(false);

  function toggleSidebar(){
    setSidebar(true);
  }
  function toggleMenu(){
      setmenu(!menu);
  }

  const value={
    sidebar,
    setSidebar,
    toggleSidebar,
    menu,
    toggleMenu
}

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};


ThemeProvider.propTypes = {
    children: PropTypes.any,
}


export { ThemeProvider, ThemeContext };

