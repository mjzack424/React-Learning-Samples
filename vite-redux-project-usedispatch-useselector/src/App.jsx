import { store } from "../app/store";
import {
  increment,
  decrement,
  incrementByAmount,
  setAmount,
} from "../feadtures/counter/counterSlice";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React + Redux</h1>
      <h2>مقدار {store.getState().value}</h2>
      <div className="card">
        <button
          onClick={() => store.dispatch(increment())}
          style={{ marginLeft: "10px" }}
        >
          افزودن &nbsp; ➕
        </button>
        <button
          onClick={() => store.dispatch(setAmount(0))}
          style={{ marginLeft: "10px" }}
        >
          0️⃣
        </button>
        <button
          onClick={() => store.dispatch(decrement())}
          style={{ marginLeft: "10px" }}
        >
          کم کردن &nbsp; ➖
        </button>

        <div style={{ paddingTop: "7px", paddingBottom: "4px" }}>
          <input
            aria-label="مقدار مورد نظر"
            value={0}
            onChange={() => {}}
            style={{ height: "30px", width: "30px", textAlign: "center" }}
          />
          <button
            onClick={() => store.dispatch(incrementByAmount(0))}
            style={{ marginRight: "10px" }}
          >
            افزودن
          </button>
        </div>
        <div style={{ paddingTop: "7px", paddingBottom: "4px" }}>
          <button
            onClick={() => store.dispatch(incrementByAmount(0))}
            style={{ marginRight: "10px" }}
          >
            افزودن غیر همزمان
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
