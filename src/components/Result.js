import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../assets/bg.png";

function Result() {
  const location = useLocation();
  const allAnswers = location.state.answers;
  const allQuestions = location.state.questions;

  let correctAnswersCount = 0;

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
          You answered {correctAnswersCount} out of {allQuestions.length} questions
          correctly!
        </p>
        <Link to="/" className="new-quiz">
          Start a new quiz!
        </Link>
      </div>
      <h2 className="check-answers-title">Check Correct Answers</h2>
      <div className="check-answers-boxes">
        {allQuestions.map((item, key) => {
          return (
            <div
              key={key}
              className={
                allAnswers[key].every((answer) => answer.trueAnswer) &&
                allAnswers[key].length === item.answers.filter((ans) => ans.trueAnswer).length
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
                      allAnswers[key].every((answer) => answer.trueAnswer) &&
                      allAnswers[key].length === item.answers.filter((ans) => ans.trueAnswer).length
                        ? "bi bi-check"
                        : "bi bi-x"
                    }
                  ></i>
                </div>
              </div>
              <div className="check-answer-bottom">
                <div className="answer-box">
                  <span className="answer-title">Your Answers</span>
                  {allAnswers[key].map((answer, answerKey) => (
                    <span key={answerKey} className="answer-text">
                      {answer.answer}
                    </span>
                  ))}
                </div>
                <div className="answer-box">
                  <span className="answer-title">Correct Answers</span>
                  {item.answers
                    .filter((answer) => answer.trueAnswer)
                    .map((answer, answerKey) => (
                      <span key={answerKey} className="answer-text">
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
