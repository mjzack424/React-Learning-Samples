import { useState } from "react";
const WithoutMemo = () => {
  console.log("رندر شدن کامپوننت بدون UseMemo ❌");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function sumNumber() {
    console.log("some number function callled.");
    let sum = 0;
    numbers.forEach((number) => {
      sum += number;
    });
    return sum;
  }

  const totalNumbers = sumNumber();

  return (
    <>
      <h3>بدون useMemo ❌</h3>
      <h4>
        جمع کل:
        {totalNumbers}
      </h4>
      <section>
        <p>WithoutMemo ...</p>
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

export default WithoutMemo;
