"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const count = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (count === 3) {
      router.push("/");
    }
  }, [count]);

  return (
    <>
      <p>شما {count} بار کلیک کرده اید.</p>
      <button onClick={() => setCount(count + 1)}>بزن روش...</button>
    </>
  );
};
export default count;
