import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  setAmount,
  selectCount,
} from "../feadtures/counter/counterSlice";
import "./App.css";
import { useState } from "react";

function App() {
  const [incAmount, setIncAmount] = useState(0);

  // const count = useSelector((state) => state.counter.value);
  const count = useSelector(selectCount); //more clean way

  const dispatch = useDispatch();

  const handleNewAmount = (number) => {
    setIncAmount(parseInt(number));
  };

  return (
    <>
      <h1>Vite + React + Redux</h1>
      <h2>مقدار {count}</h2>
      <div className="card">
        <button
          onClick={() => dispatch(increment())}
          style={{ marginLeft: "10px" }}
        >
          افزودن &nbsp; ➕
        </button>
        <button
          onClick={() => dispatch(setAmount(0))}
          style={{ marginLeft: "10px" }}
        >
          0️⃣
        </button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginLeft: "10px" }}
        >
          کم کردن &nbsp; ➖
        </button>

        <div style={{ paddingTop: "7px", paddingBottom: "4px" }}>
          <input
            aria-label="مقدار مورد نظر"
            value={incAmount}
            onChange={(e) => {
              handleNewAmount(e.target.value);
            }}
            style={{ height: "30px", width: "30px", textAlign: "center" }}
          />
          <button
            onClick={() => dispatch(incrementByAmount(incAmount))}
            style={{ marginRight: "10px" }}
          >
            افزودن
          </button>
        </div>
        <div style={{ paddingTop: "7px", paddingBottom: "4px" }}>
          <button
            onClick={() => dispatch(incrementByAmount(0))}
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
