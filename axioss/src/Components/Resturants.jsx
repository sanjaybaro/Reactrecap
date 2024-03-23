import React from "react";
import { useEffect } from "react";
import axios from "axios"

function Resturants() {
  const fetchandUpdateData = () => {
    axios
      .get(`http://localhost:8080/restaurants`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchandUpdateData();
  }, []);

  return <div></div>;
}

export default Resturants;
