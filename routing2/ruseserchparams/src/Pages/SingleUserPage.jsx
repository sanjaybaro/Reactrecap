import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const getData = async (url) => {
  try {
    let response = await fetch(url);
    let res = await response.json();
    return res;
  } catch (error) {
    throw new Error(`something went wrong`);
  }
};

function SingleUserPage() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [err, setErr] = useState(false);

  //   const params = useParams();
  const { user_id } = useParams();
  //   console.log(params);
  const fetchAndUpdateData = async (url) => {
    try {
      setLoading(true);
      let resp = await getData(url);
      //   console.log("response is", resp);
      setUser(resp.data);
      //   console.log(resp.data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAndUpdateData(`https://reqres.in/api/users/${user_id}`);
  }, [user_id]);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (err) {
    return <h1>Someting Went wrong.. please refresh again !</h1>;
  }
  //   console.log(user);

  return (
    <div>
      <h1>Single User Details</h1>
      <img src={user.avatar} alt={user.first_name} />
      <p>
        Name: {user.first_name} {user.last_name}
      </p>
      <p>
        Email: {user.email}
      </p>
      <p>
        ID: {user.id}
      </p>
    </div>
  );
}

export default SingleUserPage;
