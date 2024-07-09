import React from "react";
import ReactDOM from "react-dom/client";
import App from "@src/App.tsx";
import "@src/assets/global.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalProvider } from "./providers/GlobalProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
