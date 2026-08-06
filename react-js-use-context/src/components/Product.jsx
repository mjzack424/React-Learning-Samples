import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const Product = () => {
    const product = useContext(ProductContext)
    return (
        <>
            <h3>
                Product Component
            </h3>
            <div>
                <h5>
                    Product Information:
                </h5>
                <span>
                    Product Name:{" "}
                    {product.name}
                    <br />
                </span>
                <span>
                    Product Price:{" "}
                    {product.inStock ? product.price + "💲" : "out of stock"}
                    <br />

                </span>
                <span>
                    Product count:{" "}
                    {product.inStock ? product.count : 0}
                    <br />
                </span>
                <span>
                    Product status:{" "}
                    {product.inStock ? "in stock ✅" : "out of stock ❌"}
                    <br />
                </span>
            </div>
        </>
    )
}

export default Product;