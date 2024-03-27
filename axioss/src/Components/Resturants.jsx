import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import { ColorRing } from "react-loader-spinner";
import { useState } from "react";

const initState = {
  loading: false,
  data: [],
  error: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_LOADING": {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case "FETCH_FAILURE": {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    default: {
      throw new Error(`invalid action type`, type);
    }
  }
};

function Resturants() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [sortBy, setSortBy] = useState("rating");
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchandUpdateData = (page, limit) => {
    dispatch({ type: "FETCH_LOADING" });
    axios
      .get(`https://resturantapi-phez.onrender.com/restaurants`, {
        params: {
          _page: page,
          _limit: limit,
          _sort: sortBy,
          _order: sortOrder,
        },
      })
      .then((res) => {
        // console.log(res?.data);
        dispatch({ type: "FETCH_SUCCESS", payload: res?.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_FAILURE" });
      });
  };

  useEffect(() => {
    fetchandUpdateData(page, limit,sortBy,sortOrder);
  }, [page, limit,sortBy,sortOrder]);

  const handlePageChange = (val) => {
    setPage(page + val);
  };

  // console.log(state);

  // with above console log we can check how state is working here in case of success

  // destructure the state to get the state value

  const { loading, error, data } = state;

  if (loading) {
    return (
      <>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </>
    );
  }

  if (error) {
    return <h1 style={{ color: "red" }}>Something Went Wrong...</h1>;
  }

  return (
    <div>
      <div id="page_number_section">
        <button onClick={() => handlePageChange(-1)}>PREVIOUS</button>
        <button disabled>{page}</button>
        <button onClick={() => handlePageChange(1)}>NEXT</button>
      </div>
      <div id="sort_order_section">
        <button onClick={() => setSortOrder("asc")}>ASCENDING</button>
        <button onClick={() => setSortOrder("desc")}>DESCENDING</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {data.map((restaurant) => (
          <div
            key={restaurant.id}
            style={{
              border: "1px dashed black",
              padding: "10px",
            }}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              style={{ width: "100%" }}
            />
            <p>
              Name :{restaurant.id}--{restaurant.name}
            </p>
            <p>Type : {restaurant.type}</p>
            <p>Rating : {restaurant.rating}</p>
            <p>Number of Votes : {restaurant.number_of_votes}</p>
            <p>Price Starts from : {restaurant.price_starts_from}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resturants;
