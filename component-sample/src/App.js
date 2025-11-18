import logo from "./logo.svg";
import "./App.css";
import ClassicComponent from "./components/ClassicComponent";
import ModernComponent from "./components/ModernComponent";
import OldComponent from "./components/OldComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-link">React Components Sample</p>
      </header>
      <main>
        <ClassicComponent />
        <br />
        <ModernComponent />
        <br />
        <OldComponent />
      </main>
    </div>
  );
}

export default App;
