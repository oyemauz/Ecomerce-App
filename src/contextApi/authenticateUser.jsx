import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "@/config/firebase.config";

const AuthenticateContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div> Loading... </div>;
  }

  return (
    <AuthenticateContext.Provider value={{ currentUser }}>
      {" "}
      {children}{" "}
    </AuthenticateContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthenticateContext);
}

export { useAuth, AuthProvider };
