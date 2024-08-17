import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "What is Chirag's favourite season?",
    options: ["Summer", "Rainy", "Winter", "Spring"],
    correct: 3,
  },
  {
    question: "What game does Chirag plays the most?",
    options: ["COC", "Valorant", "BGMI", "Subway-Surfers"],
    correct: 1,
  },
  {
    question: "Who is Chirag's best friend'?",
    options: ["Dheeraj", "Rohan", "Deepanshu", "Books"],
    correct: 2,
  },
  {
    question: "What is Chirag's phone brand?",
    options: [ "Realme","Samsung", "Poco", "Iphone"],
    correct: 1,
  },
  {
    question: "What will Chirag choose to eat if he gets the following options?",
    options: ["NAAN", "FRIED-RICE", "BIRYANI", "PLAIN-ROTI"],
    correct: 0,
  },
  {
    question: "Which type of girl Chirag Likes the most?",
    options: ["Desi", "Videshi", "Sushil", "Baby-doll"],
    correct: 0,
  },
  {
    question: "How many times Chirag M's monthly?",
    options: ["0", "1", "2", "3"],
    correct: 2,
  },
  {
    question: "Which country will chirag prefer for summer vacation?",
    options: ["Germany", "Switzerland", "EngLand", "Maldives"],
    correct: 0,
  },
  {
    question: "Chirag is interested in which tecnology?",
    options: ["WEB", "ML", "CLOUD", "CYBER-SECURITY"],
    correct: 1,
  },
  {
    question: "Chirag's Birthplace is?",
    options: ["Haryana", "Delhi", "Guwahati", "Sonagachi"],
    correct: 0,
  },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
  
    useEffect(() => {
      if (timeLeft === 0) {
        handleNextQuestion();
      }
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }, [timeLeft]);
  
    const handleAnswerOptionClick = (index) => {
      if (index === questions[currentQuestion].correct) {
        setScore(score + 1);
      }
      handleNextQuestion();
    };
  
    const handleNextQuestion = () => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setTimeLeft(10);
      } else {
        setIsQuizFinished(true);
      }
    };
  
    const getResultEmoji = () => {
      const percentage = (score / questions.length) * 100;
      if (percentage === 100) return "🎉";
      if (percentage >= 80) return "😊";
      if (percentage >= 50) return "🙂";
      return "😟";
    };
  
    return (
      <div className="quiz-container">
        {isQuizFinished ? (
          <div className="quiz-result">
            <h2>
              Your Score: {score} out of {questions.length}
            </h2>
            <div className="quiz-emoji">{getResultEmoji()}</div>
            {score >= 7 && (
              <div className="party-container">
                <h3>🎉 You deserve a party! 🎉</h3>
                <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="zomato-button">
                  Order from Zomato
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="quiz-question">
            <div className="quiz-timer">⏳ Time left: {timeLeft} sec</div>
            <h2>{questions[currentQuestion].question}</h2>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}
                  className="quiz-option-button"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Quiz;