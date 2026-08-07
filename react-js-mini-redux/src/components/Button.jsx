
import { useContext } from "react";
import { INCREMENT, DECREMENT, RESET } from "../context/action";
import { StoreContext } from "../context/storeContext";
const Button = () => {
    const { dispatch } = useContext(StoreContext);

    return (

        <>
            <button onClick={() => dispatch({type: DECREMENT})}>
                ➖
            </button>
            <button onClick={() => dispatch({type: RESET})}>
                0️⃣
            </button>
            <button onClick={() => dispatch({type: INCREMENT})}>
                ➕
            </button>
        </>
    )
}
export default Button;