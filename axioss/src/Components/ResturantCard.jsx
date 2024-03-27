import React from "react";

// "id": 1,
//     "name": "Shute",
//     "type": "fine_dining",
//     "rating": 4.5,
//     "number_of_votes": 588,
//     "price_starts_from": 925,
//     "image": "https://picsum.photos/200"

function ResturantCard({
  id,
  name,
  type,
  raitng,
  number_of_votes,
  price_starts_from,
  image,
}) {
  return (
    <div>
      <img src={image} />
    </div>
  );
}

export default ResturantCard;
