import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

//consume isAuth value from context API

//3. consume--useContext here
//which box to consume
//consume auth- context

function PrivateRoute(props) {
  const { isAuth } = useContext(AuthContext); 
  //useContext
  // console.log(isAuth);
  // const isAuth = true;
  if (!isAuth) {
    
    //if user is not authenticated ; redirect to /login
    return <Navigate to="/login" />;
  }
  return props.children;
}

export default PrivateRoute;
