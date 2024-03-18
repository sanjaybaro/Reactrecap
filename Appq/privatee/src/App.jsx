import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
    setUserName("Admin"); // Set the user's name here
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <PrivateRoute
        path="/dashboard"
        element={<Dashboard userName={userName} onLogout={handleLogout} />}
        isAuthenticated={isLoggedIn}
      />
    </Routes>
  );
};

export default App;
