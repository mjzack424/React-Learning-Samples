"use client";

const error = ({ error, reset }) => {
  console.log(error);

  return (
    <html>
      <body>
        <div className="container">
          <div className="quiz-container">
            <h2>خطایی رخ داده 🤨🧐</h2>
            <h3>چی متونه باشه ؟</h3>
            <button onClick={() => reset()}>دوباره تلاش کن رفیق🙂</button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default error;
