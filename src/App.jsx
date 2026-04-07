import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import questionsData from './data/questions.json';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questionsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  if(!questionsData || questionsData.length === 0) {
    return <div>Đang phân tích dữ liệu câu hỏi...</div>;
  }

  return (
    <div className="app-container">
      {!isFinished ? (
        <div className="quiz-section">
          <header className="quiz-header">
            <h1>Ôn tập môn GDQP</h1>
            <span className="question-count">
              Câu {currentIndex + 1} / {questionsData.length}
            </span>
          </header>
          
          <QuestionCard 
            questionData={questionsData[currentIndex]} 
            onAnswer={handleAnswer} 
            onNext={nextQuestion} 
          />
        </div>
      ) : (
        <div className="result-section fade-in">
          <h2>Hoàn thành!</h2>
          <p>Điểm số của bạn: {score} / {questionsData.length}</p>
          <button className="btn restart-btn" onClick={restartQuiz}>Ôn tập lại từ đầu</button>
        </div>
      )}
    </div>
  );
}

export default App;
