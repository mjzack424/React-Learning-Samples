import { useMemo, useState } from "react";

const WithMemo = () => {
  console.log("رندر شدن کامپوننت با useMemo ✅");

  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function sumNumbers() {
    console.log("some number function callled.");
    let result = 0;

    numbers.forEach((i) => {
      result += i;
    });
    
    return result;
  }

  const total = useMemo(() => {
    return sumNumbers();
  }, []);

  return (
    <>
      <h3>WithMemo</h3>
      <h4>
        جمع کل:
        {total}
      </h4>
      <section>
        <p>WithMemo ...</p>
        <button onClick={() => setCount(count + 1)}>Count : {count}</button>
        <input
          placeholder="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </section>
    </>
  );
};

export default WithMemo;
