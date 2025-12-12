import { useEffect, useRef } from "react";

const UnControlledComp = () => {
  const inputRef = useRef([]);

  const addRef = (element) => {
    if (element && !inputRef.current.includes(element)) {
      inputRef.current.push(element);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(`name: ${inputRef.current[0].value}, email: ${inputRef.current[1].value}`);
  }
  useEffect(() => {
    console.table(inputRef);
  }, []);

  return (
    <>
      <h5>کامپوننت کنترل نشده</h5>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name2">نام</label>
          <input
            type="text"
            id="name2"
            name="name2"
            placeholder={"نام"}
            ref={addRef}
          />
          <br />
          <label htmlFor="mail">پست الکترونیک</label>
          <input
            type="email"
            id="mail2"
            name="mail2"
            placeholder={"پست الکترونیک"}
            ref={addRef}
          />
          <br />
          <button type="submit">ثبت</button>
        </form>
      </div>
      <div></div>
    </>
  );
};

export default UnControlledComp;
