import { useContext } from "react";
import { StoreContext } from "../context/storeContext";

const Counter = () =>{
    const {state} = useContext(StoreContext)
    return (
        <>
            <h3>{state.count}</h3>
        </>
    )
}
export default Counter;