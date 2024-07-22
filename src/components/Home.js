import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="intro-box">
        <div className="intro-texts">
          <h1 className="intro-title">C_CPE Dumps</h1>
          <p className="intro-description">Choose the version you want to solve</p>
        </div>
        <div className="intro-icon">
          <i className="bi bi-question-circle"></i>
        </div>
      </div>

      <div className="level-boxes">
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">1</h2>
          </div>
          <Link className="level-link" to="/quiz/A1">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        {/* <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">2</h2>
          </div>
          <Link className="level-link" to="/quiz/A2">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">3</h2>
          </div>
          <Link className="level-link" to="/quiz/B1">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">4</h2>
          </div>
          <Link className="level-link" to="/quiz/B2">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">5</h2>
          </div>
          <Link className="level-link" to="/quiz/C1">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">6</h2>
          </div>
          <Link className="level-link" to="/quiz/C2">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
