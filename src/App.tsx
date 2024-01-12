import { useState, useCallback, useEffect, useRef } from "react";

type PasswordGeneratorType = () => void;

function App() {
  const [length, setLength] = useState<number>(8);
  const [numbersAllowed, setNumbersAllowed] = useState<boolean>(false);
  const [specialCharsAllowed, setSpecialCharsAllowed] =
    useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const passRef = useRef<HTMLInputElement>(null);

  const passwordGenerator: PasswordGeneratorType = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "0123456789";
    if (specialCharsAllowed) str += "!@#$%^&*()-_+=<>?/|{}[]";

    for (let idx = 1; idx <= length; ++idx) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbersAllowed, specialCharsAllowed, setPassword]);

  const copyPassToClip = useCallback(() => {
    passRef.current?.select();
    //passRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, specialCharsAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPassToClip}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
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
          </div>
          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            id="numberInput"
            onChange={() => setNumbersAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={specialCharsAllowed}
            id="specialCharInput"
            onChange={() => setSpecialCharsAllowed((prev) => !prev)}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
