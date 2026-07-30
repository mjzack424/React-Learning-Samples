import "./App.css";
import WithMemo from "./components/WithMemo";
import WithoutMemo from "./components/WithoutMemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <main style={{padding: "50px"}}>
        <WithMemo />
        <br/>
        <hr/>
        <br/>
        <WithoutMemo />
      </main>
    </div>
  );
}

export default App;
