import React from "react";

function Userauth() {
  let isAuth = true;
  let content;
  if (isAuth) {
    content = <h1>User Authenticated</h1>;
  } else {
    content = <h1>User Not Authenticated</h1>;
  }
  return <>{content}</>;
}

export default Userauth;
