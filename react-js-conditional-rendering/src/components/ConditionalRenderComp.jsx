import { useState } from "react";

const ConditionalRenderComp = () =>{
    const [product, setProduct] = useState("")
    if(product) {
        return <p>محصول دریافت شد</p>
    }
    return <button onClick={()=> setProduct("پفک")}>افزودن محصول</button>
}
export default ConditionalRenderComp;