import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

//login function for authContext
//BOx
//useContext

function Login() {
  const { authDetails, login } = useContext(AuthContext);
  // console.log(login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const loginDetails = { email, password };

    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.token);
        login(res.token);
      });
  };

  if (authDetails.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Login Page</h1>

      <label>Email: </label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <label>Password: </label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={handleLogin}>Click here to LOGIN</button>
    </div>
  );
}

export default Login;
