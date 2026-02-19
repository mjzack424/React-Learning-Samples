"use client";

import { useState, useEffect, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { quiz } from "../data";

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;

  useEffect(() => {
    getData();
  }, [result]);

  const getData = () => {
    setAnswers(questions[activeQuestion].answers);
    setCorrectAnswer(questions[activeQuestion].correctAnswer);
  };

  const timeDelay = async () => {
    const delay = 1 + Math.floor(Math.random() * 5);
    console.log(`Delay: ${delay}`);

    await timeout(delay * 1000); //For example 2000 ms = 2s
  };

  const timeout = (delay) => {
    return new Promise((time) => setTimeout(time, delay));
  };

  // Select And Check'
  const onAnswerSelected = (answer, index) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("True answer");
    } else {
      setSelectedAnswer(false);
      console.log("False answer");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 },
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setCorrectAnswer("");
      setAnswers([]);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="container">
      <h1>صفحه آزمون</h1>
      <div>
        {!showResult ? (
          <h2>
            آزمون : {activeQuestion + 1} از
            <span>{questions.length}</span>
          </h2>
        ) : null}
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => {
                  onAnswerSelected(answer, index);
                }}
                className={
                  selectedAnswerIndex === index ? "li-selected" : "li-hover"
                }
              >
                <Suspense
                  fallback={
                    <Skeleton
                      count={1}
                      direction="rtl"
                      duration={2}
                      height={50}
                      baseColor="#7a7a7a"
                      highlightColor="#d8d8d8"
                    />
                  }
                >
                  <span>{timeDelay().then(() => answer)}</span>
                </Suspense>
              </li>
            ))}

            {checked ? (
              <button className="btn" onClick={nextQuestion}>
                {activeQuestion === questions.length - 1 ? "پایان" : "بعدی"}
              </button>
            ) : (
              <button
                className="btn-disabled"
                onClick={() => {
                  nextQuestion;
                }}
                disabled
              >
                {activeQuestion === questions.length - 1 ? "پایان" : "بعدی"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>نتایج</h3>
            <h3>
              به طور کلی {(result.score / 25) * 100}% سوالات جواب داده شده
            </h3>
            <p>کل سوالات :{questions.length}</p>
            <p>کل امتیاز : {result.score}</p>
            <p>سوالات درست : {result.correctAnswers}</p>
            <p>سوالات غلط : {result.wrongAnswers}</p>

            <button onClick={() => window.location.reload()}>
              شروع مجدد آزمون
            </button>
            {/* Show quiz result */}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
