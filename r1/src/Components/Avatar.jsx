/* eslint-disable react/prop-types */
import React from "react";

export default function Avatar({ src, name, rounded }) {
  const imgStyles = {
    borderRadius: rounded ? "50%" : "16px",
    width: "200px",
  };
  return (
    <div style={{ border: "1px solid black", marginBottom: "10px" }}>
      <img src={src} style={imgStyles} />
      <h3>{name}</h3>
    </div>
  );
}
