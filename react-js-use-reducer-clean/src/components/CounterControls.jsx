export default function CounterControls({
    count,
    onIncrement,
    onDecrement,
}) {
    return (
        <>
            <button onClick={onIncrement}>➕</button>
            <span>{count}</span>
            <button onClick={onDecrement}>➖</button>
        </>
    );
}