"use client";
import { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="container">
      <div className="quiz-container">
        <h2>خطایی رخ داده 🤨🧐</h2>
        <button onClick={() => reset()}>دوباره تلاش کن رفیق🙂</button>
      </div>
    </div>
  );
};
export default error;
