import { useState } from "react";

const ControllderComp = () => {
  const [data, setData] = useState({
    name: "",
    mail: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setData({
        name: e.target.value,
        mail: data.mail,
      });
    }
    if (e.target.name === "mail") {
      setData({
        mail: e.target.value,
        name: data.name,
      });
    }
    console.table(data);
  };

  return (
    <>
      <h5>کامپوننت کنترل شده</h5>
      <div>
        <form>
          <label htmlFor="name">نام</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={"نام"}
            value={data.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="mail">پست الکترونیک</label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder={"پست الکترونیک"}
            value={data.mail}
            onChange={handleChange}
          />
          <br />
          <button type="submit">ثبت</button>
        </form>
      </div>
      <div>
        <p>
          <span>نام:</span>
          <span>{data.name}</span>
        </p>
        <p>
          <span>پست الکترونیک:</span>
          <span>{data.mail}</span>
        </p>
      </div>
    </>
  );
};

export default ControllderComp;
