import { useContext } from "react";
import { BoxContext } from "../context/BoxContext";

const Box = () => {
    const box = useContext(BoxContext);
    return (
        <>
            <h3>Box</h3>
            <p>
                box name:{box.name}
                <br />
                box weight: {box.weight} ⚖️
                <br />
                box count: {box.count} 🫙
                <br />
                is Oppened: {box.isOpen ? "yes ✔️" : 'no ✖️'}
            </p>
        </>
    )
}

export default Box;