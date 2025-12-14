import "./App.css";
import { useState } from "react";
// import names from "./names";
// import {makeUpperCase} from "./help"

function App() {
  const [nameList, setnameList] = useState([]);

  const importLoad = () => {
    import("./names").then((module) => {
      // setnameList(module.default);
      import("./help" /*webpackChunkName: "help"*/).then(({makeUpperCase})=> {
        setnameList(makeUpperCase(module.default));
      })
      
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Spiltting React Sample</h1>
      </header>
      <hr />

      <main>
        <h1>Names:</h1>
        <button onClick={importLoad}>Load Names</button>
        {nameList.map((name, index) => {
          return <p key={index}>{name}</p>;
        })}
        {/* <hr />
        <h1>Names:</h1>
        {names.map((name, index) => {
          return <p key={index}>{name}</p>;
        })}
        <hr />
        <h1>Names:</h1>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))} */}
      </main>
    </div>
  );
}

export default App;
