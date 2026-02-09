import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  rest,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./redux/action";
import { useState } from "react";

const Counter = () => {
  const [amount, setAmount] = useState(1);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h3>شمارنده</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",

        }}
      >
        تعداد:
        <p
          dir="ltr"
          style={{ border: "1px solid whitesmoke", minWidth: "100px" }}
        >
          {count}
        </p>
      </div>
      <div>
        <button
          style={{ margin: "5px", padding: "5px" }}
          onClick={() => dispatch(increment())}
        >
          ➕
        </button>
        <button
          style={{ margin: "5px", padding: "5px" }}
          onClick={() => dispatch(rest())}
        >
          0️⃣
        </button>
        <button
          style={{ margin: "5px", padding: "5px" }}
          onClick={() => dispatch(decrement())}
        >
          ➖
        </button>
      </div>

      <div>
        <button
          style={{ margin: "5px", padding: "5px" }}
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          ➕
        </button>
        <input
          name="id"
          id="id"
          style={{ textAlign: "center" }}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          style={{ margin: "5px", padding: "5px" }}
          onClick={() => dispatch(decrementByAmount(amount))}
        >
          ➖
        </button>
      </div>
    </>
  );
};

export default Counter;
