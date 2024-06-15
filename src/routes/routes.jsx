import { Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import DashBoard from "../dashBoard";
import AdminHomePage from "../dashBoard/components/Home";
import Orders from "../dashBoard/features/Orders";
import Products from "../dashBoard/features/Products/ProductList";
import Users from "../dashBoard/components/Users";
import Setting from "../dashBoard/components/Setting";
import Profile from "../dashBoard/components/Profile";
import AppLayout from "../Pages/AppLayout";
import Grocery from "../Pages/Grocery";
import Clean_HouseHold from "../Pages/Clean_HouseHold";
import Blog from "../Pages/Blogs/Blog";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Help from "../Pages/Help";
import ErrorPage from "../ui/common/ErrorPage";
import Home from "../ui/common/Home";
import { AuthRoute, IfLoginUser } from "./AuthRoute";

export default [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: ErrorPage,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "clean-house",
        element: <Clean_HouseHold />,
      },
      {
        path: "groceries",
        element: <Grocery />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/" />,
  },
  {
    path: "/dashboard",
    element: (
      <AuthRoute>
        <DashBoard />
      </AuthRoute>
    ),
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "user",
        element: <Users />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "/dashboard",
        element: <AdminHomePage />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <IfLoginUser>
        <Login />
      </IfLoginUser>
    ),
  },
];
