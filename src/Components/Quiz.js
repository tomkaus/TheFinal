

import React, { useState } from 'react';

function Quiz() {
  // Define your quiz questions and answers here
  const questions = [
    {
      question: "(4x + 3) + (-7x -4) ",
      options: ["11x + 1", "-3x + 1", "3x - 1", "-3x - 1"],
      correctAnswer: "-3x - 1",
    },
    {
      question: "True or False: FOIL stands for First, Outer, Inner, Last.",
      correctAnswer: true,
    },
    {
        question: "(4x + 3) - (-7x -4) ",
        options: ["11x + 1", "11x + 7", "3x - 1", "-3x - 1"],
        correctAnswer: "11x + 7",
      },
    // Add questions for other lessons here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score">
          <h2>Your Score: {score}/{questions.length}</h2>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          {typeof questions[currentQuestion].correctAnswer === "boolean" ? (
            <div className="true-false-options">
              <button onClick={() => handleAnswerClick(true)}>True</button>
              <button onClick={() => handleAnswerClick(false)}>False</button>
            </div>
          ) : (
            <div className="multiple-choice-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
