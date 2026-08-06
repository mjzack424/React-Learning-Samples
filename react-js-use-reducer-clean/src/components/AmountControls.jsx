export default function AmountControls({
    inputRef,
    onIncrement,
    onDecrement,
}) {
    return (
        <>
            <button onClick={onIncrement}>➕</button>

            <input
                defaultValue={1}
                ref={inputRef}
            />

            <button onClick={onDecrement}>➖</button>
        </>
    );
}