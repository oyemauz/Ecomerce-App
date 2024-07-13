import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeProviderContext } from "./ThemeContext/ContextProvider";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";

const theme = {
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

function App() {
  return (
    <ThemeProviderContext>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router()} />
      </ThemeProvider>
    </ThemeProviderContext>
  );
}

export default App;
