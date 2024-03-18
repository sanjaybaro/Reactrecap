import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getData = async (url) => {
  try {
    let response = await fetch(url);
    let res = await response.json();
    return res;
  } catch (error) {
    throw new Error(`something went wrong`);
  }
};

function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);

  const fetchAndUpdateData = async (url) => {
    try {
      setLoading(true);
      let resp = await getData(url);
      //   console.log("response is", resp);
      setUsers(resp.data);
      //   console.log(resp.data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndUpdateData(`https://reqres.in/api/users`);
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (err) {
    return <h1>Someting Went wrong.. please refresh again !</h1>;
  }

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            margin: "10px",
            border: "1px dashed black",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <img src={user.avatar} alt={user.first_name} />
          <p>{user.id}</p>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <Link to={`/users/${user.id}`}>MORE INFO</Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
