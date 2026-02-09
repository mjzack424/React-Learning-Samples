import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite "Redux" Basics</h1>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
