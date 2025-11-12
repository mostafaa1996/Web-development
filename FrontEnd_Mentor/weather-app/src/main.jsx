import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  CityInfoProvider  from "./CityInfoContext.jsx";

import "./index.css";
import App from "./App.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CityInfoProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </CityInfoProvider>
  </StrictMode>
);
