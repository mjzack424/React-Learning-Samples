import logo from "./logo.svg";
import "./App.css";
import SimpleBox from "./components/SimpleBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>HOC Sample 🧑‍💻</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <div className="container-fluid pt-2">
          <div className="row justify-content-center">
            <SimpleBox />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
