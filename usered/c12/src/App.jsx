// import './App.css'
import { useReducer } from "react";


/*NOTES----->
 making reducer function to called aaction obj as an paramtere
 dispatch(argument)---> argument == action {}
 reducer (param1=initialstate, param2=action {})
 action is JS Obj {}---> {type,payload} as a key here 
 */

const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 1; //what state should return because reducer is responsible for state change
  }
};

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Learning Use Reducer</h1>
      <h1>Count :{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        INC
      </button>
      <button>DEC</button>
      <button>RESET</button>
    </>
  );
}

export default App;
