import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {};
  console.log(inputRef);
  return (
    <div className="App">
      {/* <Counter/> */}
      <input ref={inputRef} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <button onClick={handleClick}>Focus on Input</button>
    </div>
  );
}

export default App;
