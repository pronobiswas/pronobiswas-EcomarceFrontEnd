import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>

      <h1 className="text-blue-600 font-inter">Vite + React</h1>

      <div className="container bg-Botam2">
      <p className="text-kolapata font-popins">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </div>
    </>
  );
}

export default App;
