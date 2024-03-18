import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import "./index.css";
import AuthContextProvider from "./Context/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //  2.B
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
