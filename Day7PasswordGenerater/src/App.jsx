import { useState, useCallback, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (characterAllow) str += "~!@#$%^&*()_+`";

    for (let i = 0; i < length; i++) { // Fix loop starting from 0
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllow, characterAllow]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, characterAllow, passwordGenerator]);

  return (
    <>
      <div className="bg-gray-700 shadow-md mx-auto my-8 px-4 rounded-lg w-full max-w-md text-orange-500">
        <h1 className="text-4xl">Password Generator</h1>

        <div className="flex shadow-2xl mb-4 overflow-hidden">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="px-3 py-2 outline-none w-full"
            readOnly
          />
          <button
            className="bg-blue-500 px-3 py-0.5 w-20 text-white"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>

          <div className="flex items-center gap-x-1">
            <label>Number:</label>
            <input
              type="checkbox"
              checked={numberAllow}
              onChange={() => setNumberAllow((prev) => !prev)}
            />

            <label>Character:</label>
            <input
              type="checkbox"
              checked={characterAllow}
              onChange={() => setCharacter((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
