import './App.css';
import ControllderComp from "./components/ControllderComp"
import UnControlledComp from './components/UnControlledComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Controlled & UnControlled Component</h1>
       
      </header>
      <main>
        <ControllderComp />
        <hr/>
        <UnControlledComp />
      </main>
    </div>
  );
}

export default App;
