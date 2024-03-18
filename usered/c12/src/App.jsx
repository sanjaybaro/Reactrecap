// import './App.css'
import { useReducer } from "react";

/*NOTES----->
 making reducer function to called aaction obj as an paramtere
 dispatch(argument)---> argument == action {}
 reducer (param1=initialstate, param2=action {})
 action is JS Obj {}---> {type,payload} as a key here 
 
 1. how state is update here-
 you called and dispatch function with action object

 2.reducerFunction---
   a. it is a js function (which we describes / write)
   b. it is a pure function (
    -- which dosenot have any side effects
      -- side effects--> it doesnt change anything
                        outside of its scope.
    -- takes an input return and certain output.
    --dosnot change anything ouside of its scope,
      not possess any network requests                    
   )
   c. it takes current state and action object as argument.
   d. it return some value--> that value will be your updated state;
  
  3. initial state--
    what ever the value of initial state is:
    
  4. state --- current value of state.
  
  5. dispatch --
    a. function which updates the value of state.
    b. dipacth takes `action` object as argument.
       -- i. action object
            -- its a javascrit object {}
            -- it contains key- value pairs.
              - type: "string which describes user intent"
              - payload: optional ...

   ****FLOW of USEREDUCER****
   
   INC Button Click --> dispatch({type:"INC_COUNT"}) --> reducer(0,{type:
    "INC_COUNT"}) --> reducer returns 1 --> 1 (whatever reducer returns) 
    becomes updated state;

  --- how state update work- invoking dispatch function with action objet
    dispatch will call reduer-->reducer will rreturn a new value-->
    the new value become your updated state.
 */

function reducer(state, action) {
  /*
  if (action.type === "INC") {
    return state + 1; //what state should return because reducer is responsible for state change
  } else if (action.type === "DEC") {
    return state - 1;
  } else if (action.type === "RESET") {
    return 0;
  } else {
    throw new Error(`invalid action type`, action);
  }*/
  switch (action.type) {
    case "INC": {
      return state + 1;
    }
    case "DEC": {
      return state - 1;
    }
    case "RESET": {
      return 0;
    }
    default: {
      throw new Error(`invalid action type`, action);
    }
  }
}

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
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        DEC
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        RESET
      </button>
    </>
  );
}

export default App;
