import { useState } from "react";

const ConditionalRenComp = () => {
    const [isLoging, setIsLogin] = useState(false)
    return (
        <div>
            <h3>
                Conditional Rendering Component
            </h3>
            {(() => {
                if (isLoging) {
                    return (
                        <span>
                            ورود با موفقیت انجام شد ✅
                        </span>
                    );
                }
                return null;
            })()}
            <button onClick={() => setIsLogin(true)}>
                ورود
            </button>
        </div>
    )
}

export default ConditionalRenComp;