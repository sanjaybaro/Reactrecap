import "./App.css";
import { useReducer } from "react";

const initState = {
  username: "",
  country: "",
  age: 18,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VALUES": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case "UPDATE_AGE": {
      return {
        ...state,
        //key you have to find
        age: state.age + action.payload,
      };
    }
    case "RESET": {
      return {
        ...initState,
      };
    }
    default: {
      throw new Error(`action type invalid`, action.type);
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  // console.log(state);
  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "UPDATE_VALUES",
      payload: {
        name,
        value,
      },
    });
  };

  const handleClick = () => {
    console.log(state);
    dispatch({ type: "RESET" });
  };
  const { username, country, age } = state;
  return (
    <>
      <h3>Simple Form Management using useReducer</h3>
      <br />
      <input
        name="username"
        placeholder="Enter Username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <hr />
      <select name="country" value={country} onChange={handleChange}>
        <option>Select a Country</option>
        <option value="india">India</option>
        <option value="china">China</option>
        <option value="usa">USA</option>
      </select>
      <br />
      <hr />
      <p>Age:{age}</p>
      <button
        onClick={() => {
          dispatch({ type: "UPDATE_AGE", payload: 1 });
        }}
      >
        INCREASE AGE
      </button>
      <button disabled>{age}</button>
      <button
        onClick={() => {
          dispatch({ type: "UPDATE_AGE", payload: -1 });
        }}
      >
        DECREASE AGE
      </button>
      <br />
      <button onClick={handleClick}>SUBMIT</button>
    </>
  );
}

export default App;
