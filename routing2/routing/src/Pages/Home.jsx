import React, { useContext } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

function Home() {
  const {
    authDetails: { isAuth, token },
    logout,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  // console.log(navigate);

  return (
    <div>
      <h1>Home</h1>

      {token ? <h1>Token: {token}</h1> : <h1>USER NOT LOGGED IN</h1>}
      <button disabled={!isAuth} onClick={logout}>
        LOGOUT
      </button>
      <br />
      <button onClick={() => navigate(`/about`)}>
        CLICK TO GO TO ABOUT PAGE USING useNavigate hook
      </button>
      <br />
      <Link to="/about">
        <button>CLICK TO GO TO ABOUT PAGE USING LINK</button>
      </Link>
    </div>
  );
}

export default Home;
