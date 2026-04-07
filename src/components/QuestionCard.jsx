import React, { useState, useEffect } from 'react';
import './QuestionCard.css';

function QuestionCard({ questionData, onAnswer, onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Reset state when new question loads
  useEffect(() => {
    setSelectedOption(null);
    setIsRevealed(false);
  }, [questionData]);

  const handleOptionClick = (optionIndex, optionText) => {
    if (isRevealed) return; // Prevent double clicking

    const answerLetter = String.fromCharCode(65 + optionIndex); // A, B, C, D
    setSelectedOption(answerLetter);
    setIsRevealed(true);
    
    const isCorrect = answerLetter === questionData.correctAnswer;
    onAnswer(isCorrect);
  };

  const getOptionClass = (optionIndex) => {
    const answerLetter = String.fromCharCode(65 + optionIndex);
    if (!isRevealed) {
      return selectedOption === answerLetter ? 'option selected' : 'option';
    }

    if (answerLetter === questionData.correctAnswer) {
      return 'option correct';
    }

    if (selectedOption === answerLetter && answerLetter !== questionData.correctAnswer) {
      return 'option incorrect';
    }

    return 'option disabled';
  };

  return (
    <div className="question-card fade-in" key={questionData.id}>
      <h3 className="question-text">{questionData.question}</h3>
      <div className="options-container">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => handleOptionClick(index, option)}
            disabled={isRevealed}
          >
            {option}
          </button>
        ))}
      </div>
      
      {isRevealed && (
        <div className="action-container fade-in">
          <p className="feedback" style={{ color: selectedOption === questionData.correctAnswer ? 'var(--success)' : 'var(--error)' }}>
            {selectedOption === questionData.correctAnswer 
              ? '🎉 Chính xác!' 
              : `❌ Sai rồi. Đáp án đúng là: ${questionData.correctAnswer}`}
          </p>
          <button className="btn next-btn" onClick={onNext}>
            Câu tiếp theo ➔
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
