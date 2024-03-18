/* eslint-disable react/prop-types */
import React from "react";

export default function MyButton({ text, bgcolor }) {
  // console.log(props);

  function handleclick() {
    alert("Hello you clicked");
  }
  return (
    <div>
      <button onClick={handleclick} style={{ backgroundColor: bgcolor }}>
        {text}
      </button>
    </div>
  );
}
