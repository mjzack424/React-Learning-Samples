import { createContext } from "react";

export const BoxContext = createContext();

export const BoxProvider = ({ children }) => {
    const box = {
        name: "box 1",
        weight: 10,
        count: 2,
        isOpen: false
    }
    return (
        <BoxContext.Provider value={box}>
            {children}
        </BoxContext.Provider>
    )

}