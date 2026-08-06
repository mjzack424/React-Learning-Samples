import { useState } from "react";

const EventHandlingRegisterComp = () => {
  const [from, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <>
      <h3>EventHandlingRegisterComp</h3>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="نام"
          value={from.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="نام خانوادگی"
          value={from.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="پست الکترونیک"
          value={from.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          value={from.password}
          onChange={handleChange}
        />
      </form>
      {from.firstName && from.lastName && from.email && from.password && (
        <div>
          <h5>مشخصات شما</h5>
          <p>
            نام و نام خانوادگی: {from.firstName} {from.lastName}
          </p>
          <p>پست الکترونیک: {from.email}</p>
        </div>
      )}
    </>
  );
};
export default EventHandlingRegisterComp;
