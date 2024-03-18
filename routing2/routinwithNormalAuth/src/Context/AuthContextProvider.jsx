import { createContext } from "react";
import { useState } from "react";

//cpc

//create context
export const AuthContext = createContext();
// console.log(AuthContext);

//provide context
//2.A
function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;

//consume comtext
