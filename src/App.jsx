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
  RouterProvider,
} from "react-router-dom";

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
    path: "/",
    element: <AppLayout />,
    errorElement: ErrorPage,
    children: 
    [
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

