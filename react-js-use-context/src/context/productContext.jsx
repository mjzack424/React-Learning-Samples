import { createContext } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const product = {
        name: "chips",
        price: 5,
        count: 2,
        inStock: true,

    }
    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}