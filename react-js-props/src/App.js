import logo from "./logo.svg";
import "./App.css";
import PropsComponentsOne from "./components/PropsComponentsOne";
import PropsComponentsTwo from "./components/PropsComponentsTwo";


function App() {
  return (
    <div className="App">
      <PropsComponentsOne name="علی" familyName="غفاری">
        <p>سلام</p>
      </PropsComponentsOne>
      <PropsComponentsTwo name="علی 2" familyName="غفاری 2">
        <p>سلام2</p>
      </PropsComponentsTwo>
    </div>
  );
}

export default App;
