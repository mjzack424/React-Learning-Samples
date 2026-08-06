import { useState } from "react";

const ThemeRendComp = () => {
    const [dark, setDark] = useState(false);

    return (
        <>
            <h3>
                Theme Conditional Render Component
            </h3>
            {dark ? <span>تم دارک</span> : <span>تم لایت</span>}
            <br />
            <button onClick={() => setDark(!dark)}>
                switch theme
            </button>
        </>
    )
}
export default ThemeRendComp;