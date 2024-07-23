import React, { useState, useEffect } from "react";
import { useQuizContext } from "../context/QuizContext";
import { useNavigate, useParams } from "react-router-dom";

function Quiz() {
  const { level } = useParams();
  const navigate = useNavigate();

  const { questions, currentQuestion, setCurrentQuestion } = useQuizContext();

  const [isNextButton, setIsNextButton] = useState(false);
  const [isResultButton, setIsResultButton] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isResult, setIsResult] = useState(false);

  const toggleAnswer = (index) => {
    setSelectedIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  function shuffleArray(array) {
    const newArray = array.slice(); // Create a copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  useEffect(() => {
    if (questions[level] && questions[level][currentQuestion]) {
      setShuffledAnswers(shuffleArray(questions[level][currentQuestion].answers));
    }
  }, [currentQuestion, questions, level]);

  useEffect(() => {
    if (selectedIndexes.length > 0) {
      if (currentQuestion === questions[level].length - 1) {
        setIsNextButton(false);
        setIsResultButton(true);
      } else {
        setIsNextButton(true);
      }
    } else {
      setIsNextButton(false);
      setIsResultButton(false);
    }
  }, [selectedIndexes, currentQuestion, questions, level]);

  const nextQuestion = () => {
    if (currentQuestion >= questions[level].length - 1) {
      addAnswer();
      setCurrentQuestion(0);
      setIsResult(true);
    } else {
      setIsNextButton(false);
      addAnswer();
      setCurrentQuestion(currentQuestion + 1);
      setSelectedIndexes([]);
    }
  };

  const addAnswer = () => {
    const selectedAnswersList = selectedIndexes.map(
      (index) => shuffledAnswers[index]
    );
    const newAnswers = [...selectedAnswers, selectedAnswersList];
    setSelectedAnswers(newAnswers);
  };

  return isResult ? (
    navigate("/result", {
      state: {
        answers: selectedAnswers,
        questions: questions[level],
      },
    })
  ) : (
    <div>
      <div className="progress-box">
        <div className="progress-top">
          <div className="progress-texts">
            <h2 className="progress-title">Quiz Progress</h2>
            <p className="progress-description">
              You are solving {level} Level words quiz
            </p>
          </div>
          <div className="progress-icon">
            <i className="bi bi-bar-chart"></i>
          </div>
        </div>
        <div className="progress-bottom">
          <div
            className="progress-circle"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              "--value":
                ((currentQuestion + 1) / questions[level].length) * 100,
            }}
          >
            <span className="progress-big">{currentQuestion + 1}</span>
            <span className="progress-mini">/{questions[level].length}</span>
          </div>
          <p className="progress-detail">
            You solve the {currentQuestion + 1} question out of a total of{" "}
            {questions[level].length} questions
          </p>
        </div>
      </div>
      <div className="question-box">
        <div className="question-text">
          <h2 className="question-title">Question: {currentQuestion + 1}</h2>
          <h3 className="question">
            {questions[level][currentQuestion].question}
          </h3>
        </div>
      </div>

      <div className="answers-boxes">
        {shuffledAnswers.map((answer, index) => {
          return (
            <label
              onClick={() => toggleAnswer(index)}
              key={index}
              htmlFor={index}
              className={
                selectedIndexes.includes(index)
                  ? "answer-label selected"
                  : "answer-label"
              }
            >
              {answer.answer}
              <input
                type="checkbox"
                name="answer"
                id={index}
                checked={selectedIndexes.includes(index)}
                readOnly
              />
            </label>
          );
        })}
      </div>

      {isNextButton ? (
        <div className="next">
          <button
            onClick={() => nextQuestion()}
            type="button"
            className="next-btn"
          >
            Next Question
            <div className="icon">
              <i className="bi bi-arrow-right"></i>
            </div>
          </button>
        </div>
      ) : null}

      {isResultButton ? (
        <div className="next">
          <button
            onClick={() => nextQuestion()}
            type="button"
            className="next-btn result-btn"
          >
            See Results
            <div className="icon">
              <i className="bi bi-bar-chart"></i>
            </div>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Quiz;
