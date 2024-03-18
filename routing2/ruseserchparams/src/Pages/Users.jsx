import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const getData = async (url) => {
  try {
    let response = await fetch(url);
    let res = await response.json();
    return res;
  } catch (error) {
    throw new Error(`something went wrong`);
  }
};

//convert to number
const formatValue = (val) => {
  if (val <= 1) {
    val = 1;
  }
  if (typeof val !== "number") {
    val = 1;
  }
  if (!val) {
    val = 1;
  }
  return Number(val);
};

function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = formatValue(searchParams.get("page"));
  const [page, setPage] = useState(initPage); //fromqueryparama
  const [title, setTitle] = useState("");

  //for useSearchParams
  useEffect(() => {
    // const params = {
    //   page: 1,
    //   title: "xyz",
    // };
    // setSearchParams(params);
    setSearchParams({ page: page, title: title });
  }, [page,title]);

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
    fetchAndUpdateData(`https://reqres.in/api/users?page=${page}`);
  }, [page]);

  // const handlePageChange = (val) => {
  //   setPage(page + val);
  // };
  function handlePageChange(val) {
    return setPage(page + val);
  }

  // console.log(searchParams.get("page"));

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (err) {
    return <h1>Someting Went wrong.. please refresh again !</h1>;
  }

  return (
    <div>
      <h1>Users</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>
        <button disabled={page <= 1} onClick={() => handlePageChange(-1)}>
          PREVIOUS
        </button>
        <button>{page}</button>
        <button onClick={() => handlePageChange(1)}>NEXT</button>
      </div>
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
