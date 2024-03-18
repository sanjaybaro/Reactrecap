import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

//login function for authContext
//BOx
//useContext


function Login() {
  const {login}=useContext(AuthContext)
  console.log(login);
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Click  here to LOGIN</button>
    </div>
  )
}

export default Login
