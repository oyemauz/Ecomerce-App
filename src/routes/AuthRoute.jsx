import { useAuth } from "@/contextApi/authenticateUser";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AuthRoute({ children }) {
  const auth = useAuth();

  return auth.currentUser ? children : <Navigate to={"/login"} />;
}

// eslint-disable-next-line react/prop-types
function AuthLoginUser({ children }) {
  const auth = useAuth();
  return auth.currentUser ? <Navigate to="/dashboard" /> : children;
}

export { AuthRoute, AuthLoginUser };
