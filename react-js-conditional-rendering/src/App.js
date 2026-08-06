import logo from "./logo.svg";
import "./App.css";
import ConditionalRenComp from "./components/ConditionalRenComp";
import ConditionalRenderComp from "./components/ConditionalRenderComp";
import ThemeRendComp from "./components/ThemeRendComp";

function App() {
  return (
    <div className="App">
      <ThemeRendComp />
      <hr />
      <ConditionalRenderComp />
      <hr />
      <ConditionalRenComp />
    </div>
  );
}

export default App;
