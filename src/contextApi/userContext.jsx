import { useContext, createContext, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Context not found");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useUser, UserProvider };
