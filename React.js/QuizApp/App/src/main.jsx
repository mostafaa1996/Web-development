import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./index_ord.css";
import { AnswersProvider } from "./answersProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnswersProvider>
      <App />
    </AnswersProvider>
  </React.StrictMode>
);
