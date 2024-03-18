import React from "react";
import { useState } from "react";

function Batman() {
  const [name, setName] = useState("Batman");
  const [age, setAge] = useState(20);
  const [isMarried, setIsMarried] = useState(false);
  const [hobbies, setHobbies] = useState(["Eat", "Sleep", "Fight Crime"]);
  const [address, setAddress] = useState({ home: "", office: "" });

  const handleHobbiesChange = (event) => {
    setHobbies([...hobbies, event.target.value]);
  };

  const handleAddressChange = (type, event) => {
    setAddress({
      ...address,
      [type]: event.target.value,
    });
  };

  return (
    <div className="App">
      <div style={{ border: "5px solid black" }}>
        <h1>Person ID Card</h1>
        <img
          src="https://i0.wp.com/batman-news.com/wp-content/uploads/2017/07/Ben-Affleck-Batman-Justice-League-portrait.jpg"
          alt="user"
          height={150}
          width={150}
        />
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Married : {isMarried ? "Yes" : "No"}</p>
        <p>Hobbies: {hobbies.join(", ")}</p>
        <p>Home Address: {address.home}</p>
        <p>Office Address: {address.office}</p>
      </div>
      <button onClick={() => setName("Bruce")}>Change name to Bruce</button>
      <button onClick={() => setAge(26)}>Change age to 26</button>
      <button onClick={() => setIsMarried(!isMarried)}>
        Toggle Married State
      </button>

      {/* Add input box for hobbies */}
      <input
        type="text"
        placeholder="Add a hobby"
        onChange={handleHobbiesChange}
      />

      {/* Add input boxes for home and office addresses */}
      <input
        type="text"
        placeholder="Home Address"
        onChange={(event) => handleAddressChange("home", event)}
      />
      <input
        type="text"
        placeholder="Office Address"
        onChange={(event) => handleAddressChange("office", event)}
      />
    </div>
  );
}

export default Batman;
