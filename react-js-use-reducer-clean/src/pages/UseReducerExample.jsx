import { useRef } from "react";
import useCounter from "../hooks/useCounter";
import CounterControls from "../components/CounterControls";
import AmountControls from "../components/AmountControls";

export default function UseReducerExample() {
    const valueRef = useRef();

    const {
        count,
        increment,
        decrement,
        incrementByAmount,
        decrementByAmount,
        reset,
    } = useCounter();

    const getValue = () => Number(valueRef.current.value);

    return (
        <>
            <h3>useReducer Example</h3>

            <CounterControls
                count={count}
                onIncrement={increment}
                onDecrement={decrement}
            />

            <br />

            <AmountControls
                inputRef={valueRef}
                onIncrement={() => incrementByAmount(getValue())}
                onDecrement={() => decrementByAmount(getValue())}
            />

            <br />

            <button onClick={reset}>Reset</button>
        </>
    );
}