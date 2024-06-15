import { useAuth } from "@/contextApi/authenticateUser";
import { Loading } from "react-fullscreen-loading";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AuthRoute({ children }) {
  const auth = useAuth();

  if (auth.loading)
    return (
      <Loading
        loading
        background="rgb(241 ,245 ,249)"
        loaderColor=" rgb(132, 204, 22)"
      />
    );

  return auth.currentUser ? children : <Navigate to={"/login"} />;
}

// eslint-disable-next-line react/prop-types
function IfLoginUser({ children }) {
  const auth = useAuth();

  if (auth.loading)
    return (
      <Loading
        loading
        background="rgb(241 ,245 ,249)"
        loaderColor=" rgb(132, 204, 22)"
      />
    );

  return auth.currentUser ? <Navigate to="/dashboard" /> : children;
}

export { AuthRoute, IfLoginUser };
