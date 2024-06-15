import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "@/config/firebase.config";
import Loading from "react-fullscreen-loading";
import { getVendor } from "@/api/vendorAuthentication";

const AuthenticateContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // if (currentUser === null) {
        const data = await getVendor(user.uid);
        setCurrentUser(data);
        // }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Loading
        loading
        background="rgb(241 ,245 ,249)"
        loaderColor=" rgb(132, 204, 22)"
      />
    );
  }

  return (
    <AuthenticateContext.Provider
      value={{ currentUser, setCurrentUser, loading }}
    >
      {" "}
      {children}{" "}
    </AuthenticateContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthenticateContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider };
