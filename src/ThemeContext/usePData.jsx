import { useContext } from 'react';
import { ThemeContext } from './ContextProvider'; // Adjust the path as needed

function usePdata() {
  const context = useContext(ThemeContext);
  return context;
}

export default usePdata;
