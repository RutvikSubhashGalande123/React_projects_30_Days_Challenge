import React, { useState, useEffect } from "react";
import questions from "./components/Questions";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [time, setTime] = useState(5 * 60); // 5 minutes in seconds
  const [timer, setTimer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timer);
  }, []);

  const startTimer = () => {
    const newTimer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(newTimer);
          setShowScore(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setTimer(newTimer);
  };

  const handleAnswer = (selectedOption) => {
    const isCorrect =
      selectedOption === questions[currentQuestion].correctAnswer;
    setSelectedAnswer(selectedOption);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      clearInterval(timer);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTime(5 * 60);
    startTimer();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
          <p>Total Time: {formatTime(5 * 60 - time)} minutes</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ol>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button
                  className={
                    selectedAnswer === option
                      ? isCorrectAnswer(option)
                        ?  "correct-answer"
                        : "incorrect-answer"
                      : ""
                  }
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ol>
          <div className="timer">Time Remaining: {formatTime(time)}</div>
        </div>
      )}
    </div>
  );

  function isCorrectAnswer(option) {
    return option === questions[currentQuestion].correctAnswer;
  }
}

export default App;
