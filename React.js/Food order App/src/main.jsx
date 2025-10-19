import React from "react";
import ReactDOM from "react-dom/client";
import OrderListProvider from "./orderListProvider.jsx";

import App from "./App.jsx";
import "./index.css";
import "./index_normal.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OrderListProvider>
      <App />
    </OrderListProvider>
  </React.StrictMode>
);
