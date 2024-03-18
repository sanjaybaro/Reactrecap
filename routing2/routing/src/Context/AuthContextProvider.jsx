import { createContext } from "react";
import { useState } from "react";

//cpc

//1.create context
export const AuthContext = createContext();
// console.log(AuthContext);

//provide context
//2.A
function AuthContextProvider({ children }) {
  const [authDetails, setAuthDetails] = useState({
    isAuth: false,
    token: null,
  });

  const login = (token) => {
    setAuthDetails({
      isAuth: true,
      token: token,
    });
  };

  const logout = () => {
    setAuthDetails({
      isAuth: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;

//consume comtext
