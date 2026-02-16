"use client";
import { useState } from "react";
import Count from "./count";

const page = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>شمارنده</h2>
      <Count count={count} setCount={setCount} />
    </>
  );
};

export default page;
