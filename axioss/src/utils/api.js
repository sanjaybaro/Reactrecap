import axios from "axios";

export const getRestaurants = () => {
  return axios.get(`https://resturantapi-phez.onrender.com/restaurants`, {
    params: {
      _page: page,
      _limit: limit,
      _sort: sortBy,
      _order: sortOrder,
    },
  });
};
