import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "auto",
        backgroundColor: "gray",
        padding: "20px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        Home
      </Link>
      <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
        User
      </Link>
      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
        About
      </Link>
      <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
