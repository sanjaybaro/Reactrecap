import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleclicked = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Button btnc={handleclicked} c={count} />
      <Button btnc={handleclicked} c={count} />
      <Button btnc={handleclicked} c={count} />
      <Button btnc={handleclicked} c={count} />
    </>
  );
}

export default App;
