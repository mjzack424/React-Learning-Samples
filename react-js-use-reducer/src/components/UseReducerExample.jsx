import { useReducer, useRef } from "react";

const UseReducerExample = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return state + 1;
            case "incrementByAmount":
                return state + action.payload;
            case "decrement":
                return state - 1;
            case "decrementByAmount":
                return state - action.payload;
            case "reset":
                return 0;
            default:
                return state;
        }
    }

    const initialState = 0;
    const valueRef = useRef(null);
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h3>
                Use Reducer Example
            </h3>
            <button onClick={() => dispatch({ type: "increment" })}>➕</button>
            <span>
                {count}
            </span>
            <button onClick={() => dispatch({ type: "decrement" })}>➖</button>
            <br />
            <button onClick={() => dispatch({ type: "incrementByAmount", payload: Number(valueRef.current.value) })}>➕</button>
            <span>
                <input defaultValue={1} ref={valueRef} />
            </span>
            <button onClick={() => dispatch({ type: "decrementByAmount", payload: Number(valueRef.current.value) })}>➖</button>

            <br />
            <button onClick={() => dispatch({ type: "reset" })}>
                0️⃣
            </button>
        </>
    )
}
export default UseReducerExample;