"use client";
import { useState } from "react";

const count = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>شما {count} بار کلیک کرده اید.</p>
      <button onClick={() => setCount(count + 1)}>بزن روش...</button>
    </>
  );
};
export default count;
