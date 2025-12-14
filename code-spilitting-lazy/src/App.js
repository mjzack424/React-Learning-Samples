import "./App.css";
import { useState } from "react";
function App() {
  const [names, setNames] = useState([]);
  const customLoad = async () => {
    const names = (await import("./utils/names"/*webpackChunkName:"names"*/)).default;
    const makeUpperCase = (
      await import("./utils/tools" /*webpackChunkName:"tools"*/)
    ).toUpper;
    setNames(makeUpperCase(names));
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>code spilitting lazy</p>
      </header>
      <main>
        <button onClick={customLoad}>Load</button>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </main>
    </div>
  );
}

export default App;
