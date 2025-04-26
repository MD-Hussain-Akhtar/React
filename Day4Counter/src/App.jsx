import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(15); // ✅ let -> const

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // ✅ prevCount use kiya
  }

  function reset() {
    setCount(0); // ✅ setCount() error tha
  }

  return (
    <>
      <h1>Array Value: {count}</h1>
      <button onClick={add}>Add value</button>
      <button onClick={sub}>Subtraction</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
