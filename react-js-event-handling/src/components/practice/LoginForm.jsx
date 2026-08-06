import { useState } from "react";

const LoginForm = () => {
    const [loged, setLoged] = useState(false);
    const [formData, setFormData] = useState({
        user: "",
        password: "",
        rePassword: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password === formData.rePassword && formData.user === "zack" && formData.password === "123") {
            setLoged(true);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((pre) => ({
            ...pre,
            [name]: value
        }))
    }


    return (
        <div>
            <hr />
            <h3>
                LoginForm
            </h3>
            <form onSubmit={handleSubmit}>
                <input name="user" value={formData.user} placeholder="نام کاربری" onChange={handleChange} />
                <input type="password" name="password" value={formData.password} placeholder="رمز عبور" onChange={handleChange} />
                <input type="password" name="rePassword" value={formData.rePassword} placeholder="تکرار رمز عبور" onChange={handleChange} />
                <button type="submit">
                    ثبت
                </button>
            </form>
            <hr />
            <span>
                {loged && <p>ورود موفقیت انجام شد ✅</p>}
            </span>
        </div>
    )
}
export default LoginForm;