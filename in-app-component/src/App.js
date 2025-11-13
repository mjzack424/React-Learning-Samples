import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

const Hello = () => {
  return (
    <div className="border">
      <h1>Hello World!</h1>
      <p>*in app component</p>
      <p>*NEW</p>
    </div>
  );
};

function Hello2 () {
  return (
      <div className="border">
        <h1>Hello World!</h1>
        <p>*in app component</p>
        <p>*OLD</p>
      </div>
    );
}

class Hello3 extends Component {
  render() {
    return (
      <div className="border">
        <h1>Hello World!</h1>
        <p>*in app component</p>
        <p>*ClASSIC</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello />
        <Hello2 />
        <Hello3 />
      </header>
    </div>
  );
}

export default App;
