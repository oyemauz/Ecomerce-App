import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import GlobalStyles from "./Styles/GlobalStyles.js";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen="false" />
      <Toaster />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
