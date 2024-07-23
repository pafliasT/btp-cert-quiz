import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../assets/bg.png";

function Result() {
  const location = useLocation();
  const allAnswers = location.state.answers;
  const allQuestions = location.state.questions;

  let correctAnswersCount = 0;

  // Calculate the number of correct answers
  allAnswers.forEach((answers, questionIndex) => {
    const correctAnswers = allQuestions[questionIndex].answers.filter(
      (answer) => answer.trueAnswer
    ).length;
    const correctSelectedAnswers = answers.filter(
      (answer) => answer.trueAnswer
    ).length;
    if (correctSelectedAnswers === correctAnswers) {
      correctAnswersCount += 1;
    }
  });

  // Helper function to check if the user's answer is correct
  const isCorrectAnswer = (userAnswer, correctAnswers) => {
    return correctAnswers.some(answer => answer.answer === userAnswer.answer && answer.trueAnswer);
  };

  return (
    <div className="result">
      <div className="result-box">
        <div className="result-bg">
          <span className="percentile">
            {Math.round((correctAnswersCount / allQuestions.length) * 100)}%
          </span>
          <img src={Image} alt="result" />
        </div>
        <p className="result-detail">
          You answered {correctAnswersCount} out of {allQuestions.length} questions correctly!
        </p>
        <Link to="/" className="new-quiz">
          Start a new quiz!
        </Link>
      </div>
      <h2 className="check-answers-title">Check Correct Answers</h2>
      <div className="check-answers-boxes">
        {allQuestions.map((item, key) => {
          const userAnswers = allAnswers[key];
          const correctAnswers = item.answers.filter(answer => answer.trueAnswer);

          return (
            <div
              key={key}
              className={
                userAnswers.every(answer => isCorrectAnswer(answer, correctAnswers)) &&
                userAnswers.length === correctAnswers.length
                  ? "check-answer-box correct"
                  : "check-answer-box wrong"
              }
            >
              <div className="check-answer-top">
                <div className="check-texts">
                  <p className="check-answer-count">Question: {key + 1}</p>
                  <h3 className="check-answer-question">{item.question}</h3>
                </div>
                <div className="check-icon">
                  <i
                    className={
                      userAnswers.every(answer => isCorrectAnswer(answer, correctAnswers)) &&
                      userAnswers.length === correctAnswers.length
                        ? "bi bi-check"
                        : "bi bi-x"
                    }
                  ></i>
                </div>
              </div>
              <div className="check-answer-bottom">
                <div className="answer-box">
                  <span className="answer-title">Your Answers</span>
                  {userAnswers.map((answer, answerKey) => (
                    <span
                      key={answerKey}
                      className={
                        isCorrectAnswer(answer, correctAnswers)
                          ? "answer-text correct"
                          : "answer-text wrong"
                      }
                    >
                      {answer.answer}
                    </span>
                  ))}
                </div>
                <div className="answer-box">
                  <span className="answer-title">Correct Answers</span>
                  {correctAnswers.map((answer, answerKey) => (
                    <span key={answerKey} className="answer-text correct">
                      {answer.answer}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
