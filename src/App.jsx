import './index.css';
import AppLayout from "./Pages/AppLayout";
import Grocery from "./Pages/Grocery";
import Clean_HouseHold from "./Pages/Clean_HouseHold";
import Blog from "./Pages/Blogs/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Help from "./Pages/Help";
import ErrorPage from "./ui/common/ErrorPage";
import Home from "./ui/common/Home";
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProviderContext} from './ThemeContext/ContextProvider';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login";
import DashBoard from './DashBoard/DashBoard';
import AdminHomePage from './DashBoard/Components/Home';
import Orders from './DashBoard/Features/Orders/Orders';
import Products from './DashBoard/Features/Products/Products';
import Users from './DashBoard/Components/Users';
import Setting from './DashBoard/Components/Setting';

const theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

const router = createBrowserRouter([
  {
    path: "/app", 
    element: <AppLayout />,
    errorElement: ErrorPage,
    children: 
    [
      {
        path: "/app",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },{
        path: "blogs",
        element: <Blog />,
      },{
        path: "clean-house",
        element: <Clean_HouseHold />,
      },{
        path: "groceries",
        element: <Grocery />,
      },{
        path: "help",
        element: <Help />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/login"/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashBoard/>,
    children:[
    {
        path:'user',
        element:<Users/>
    },      
    {
          path:'setting',
          element:<Setting/>
    },
    {
      path:'/dashboard',
      element:<AdminHomePage/>
    },
    {
      path:'orders',
      element:<Orders/>
    },
    {
      path:'products',
      element:<Products/>
    },
    ]
  },
]);

function App() {
  return (
     <ThemeProviderContext>
        <ThemeProvider theme={theme} >
          <RouterProvider router={router}/>
       </ThemeProvider>
     </ThemeProviderContext>
  )
  
}

export default App
