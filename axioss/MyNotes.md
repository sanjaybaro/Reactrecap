# fetching data on mount phase below:

# Using async/await:
/*

import React, { useEffect } from "react";

function Resturants() {
  const fetchandUpdateData = async () => {
    try {
      const response = await fetch("http://localhost:8080/restaurants");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchandUpdateData();
  }, []);

  return <div></div>;
}

export default Resturants;

*/

# Using traditional .then and .catch:

/*

import React, { useEffect } from "react";

function Resturants() {
  const fetchandUpdateData = () => {
    fetch("http://localhost:8080/restaurants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    fetchandUpdateData();
  }, []);

  return <div></div>;
}

export default Resturants;

*/

# Using Normal Function

/* 
Using async/await with normal function declaration:

import React, { useEffect } from "react";

function Resturants() {
  async function fetchandUpdateData() {
    try {
      const response = await fetch("http://localhost:8080/restaurants");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchandUpdateData();
  }, []);

  return <div></div>;
}

export default Resturants;


*/

Using traditional .then and .catch with normal function declaration:

/*
import React, { useEffect } from "react";

function Resturants() {
  function fetchandUpdateData() {
    fetch("http://localhost:8080/restaurants")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  useEffect(() => {
    fetchandUpdateData();
  }, []);

  return <div></div>;
}

export default Resturants;


*/