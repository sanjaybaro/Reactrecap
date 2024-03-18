import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import SingleUserPage from "../Pages/SingleUserPage";
import Users from "../Pages/Users";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:user_id" element={<SingleUserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
