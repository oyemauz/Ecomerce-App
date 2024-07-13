import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.css";
import "./assets/css/dashboard.css";
import "./assets/css/mediaQueries.css";
import React from "react";
import GlobalStyles from "./Styles/GlobalStyles.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contextApi/authenticateUser";
import { OrderProvider } from "./contextApi/orderDetails.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen="false" />
      <Toaster />
      <AuthProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
