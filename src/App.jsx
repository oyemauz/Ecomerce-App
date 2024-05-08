import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Grocery from "./Pages/Grocery";
import Clean_HouseHold from "./Pages/Clean_HouseHold";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Help from "./Pages/Help";
import ErrorPage from "./ui/common/ErrorPage";
import Header from "./ui/Header/Header";
import { ThemeProvider } from 'styled-components';
// import ThemeProvider as ThemeProviderContext from "";
import {ThemeProvider as ThemeProviderContext} from './ThemeContext/ContextProvider';
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
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <AppLayout />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/clean-housebold",
        element:<Clean_HouseHold/>
      },
      {
        path: "/blogs",
        element:<Blogs/>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/help",
        element:<Help/>
      },
    ],
  },
]);
function App() {

  return (
    <ThemeProviderContext>
      <ThemeProvider theme={theme} >
      <div className="app">
      <Header/>
      <RouterProvider router={router}/> 
      </div>
      </ThemeProvider>
    </ThemeProviderContext>
  )
  
}

export default App

