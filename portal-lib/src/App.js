import logo from "./logo.svg";
import "./App.css";
import PortalLib from "./components/PortalLib";
import SafePortalsLib from "./components/SafePortalsLib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Portal Libs</p>
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
        <PortalLib />
        <SafePortalsLib />
      </main>
    </div>
  );
}

export default App;
