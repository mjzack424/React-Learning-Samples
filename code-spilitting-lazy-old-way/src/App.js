import "./App.css";
import React, {  useState } from "react";

function loadComponent(importFunc) {
  return class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null,
      };
    }
    componentDidMount() {
      importFunc().then((module) => {
        this.setState({
          Component: module.default,
        });
      });
    }

    render() {
      return this.state.Component ? (
        <this.state.Component {...this.props} />
      ) : null;
    }
  };
}

const MyComponent = loadComponent(()=> import("./components/LazyComp"));

function App() {
  const [names, setNames] = useState([]);
  const customLoad = async () => {
    const names = (await import("./utils/names" /*webpackChunkName:"names"*/))
      .default;
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
      <hr/>
      {names.length > 0 && <MyComponent />}
    </div>
  );
}

export default App;
