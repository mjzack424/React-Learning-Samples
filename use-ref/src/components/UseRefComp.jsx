import { useEffect, useRef } from "react";

const UseRefComp = () => {
  const inputRef = useRef([]);

  const addRef = (element) => {
    if (element && !inputRef.current.includes(element)) {
      inputRef.current.push(element);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `name is ${inputRef.current[0].value} and family ${inputRef.current[1].value}`
    );
    console.table(inputRef.current);
  };

  useEffect(()=>{
    console.log("runned...")
  },[])

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="firstName" type="text" placeholder="نام" ref={addRef} />
          <input
            name="familyName"
            type="text"
            placeholder="نام خانوادگی"
            ref={addRef}
          />
          <button type="submit">ثبت</button>
        </form>
      </div>
    </>
  );
};

export default UseRefComp;
