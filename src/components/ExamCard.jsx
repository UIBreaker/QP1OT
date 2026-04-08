import React, { useState, useEffect } from 'react';
import './QuestionCard.css';

/**
 * ExamCard — dùng cho chế độ Thi thử.
 * Không hiển thị đáp án ngay lập tức; chỉ cho phép chọn một lần rồi chuyển câu.
 */
function ExamCard({ questionData, savedAnswer, onAnswer, onNext, isLast }) {
  const [selectedOption, setSelectedOption] = useState(savedAnswer || null);

  useEffect(() => {
    setSelectedOption(savedAnswer || null);
  }, [questionData, savedAnswer]);

  const handleOptionClick = (optionIndex) => {
    const answerLetter = String.fromCharCode(65 + optionIndex);
    setSelectedOption(answerLetter);
    onAnswer(questionData.id, answerLetter);
  };

  const getOptionClass = (optionIndex) => {
    const answerLetter = String.fromCharCode(65 + optionIndex);
    if (selectedOption === answerLetter) return 'option selected';
    return 'option';
  };

  return (
    <div className="question-card fade-in" key={questionData.id}>
      <h3 className="question-text">{questionData.question}</h3>
      <div className="options-container">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="action-container exam-actions fade-in">
        {!selectedOption && (
          <p className="exam-hint">Hãy chọn một đáp án để tiếp tục</p>
        )}
        <button
          className="btn next-btn"
          onClick={onNext}
          disabled={!selectedOption}
          style={{ opacity: selectedOption ? 1 : 0.4, marginLeft: 'auto' }}
        >
          {isLast ? 'Nộp bài 🏁' : 'Câu tiếp theo ➔'}
        </button>
      </div>
    </div>
  );
}

export default ExamCard;
