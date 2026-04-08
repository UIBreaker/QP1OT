import React, { useState } from 'react';

/**
 * SetResultScreen — Hiển thị kết quả chi tiết sau khi thi thử bộ đề 15 câu.
 * Mỗi câu hiển thị: đáp án người dùng chọn, đáp án đúng, đúng/sai.
 */
function SetResultScreen({ questions, userAnswers, setNumber, onRetry, onHome }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const correct = questions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const total = questions.length;
  const grade = ((correct / total) * 10).toFixed(1);
  const passed = parseFloat(grade) >= 3;

  const toggleExpand = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <div className="set-result-screen fade-in">
      {/* ── Summary ── */}
      <div className="set-result-header">
        <div className="set-result-icon">{passed ? '🏆' : '😢'}</div>
        <h2 className="set-result-title">{passed ? 'Đạt!' : 'Chưa đạt!'}</h2>
        <p className="set-result-subtitle">Bộ đề #{setNumber} · Thi thử</p>
        <div className={`grade-badge ${passed ? 'passed' : 'failed'}`}>
          {grade} / 10
        </div>
        <div className="result-stats" style={{ marginTop: '1rem' }}>
          <div className="stat-item">
            <span className="stat-label">Đúng</span>
            <span className="stat-value correct-stat">{correct}</span>
          </div>
          <div className="stat-divider">|</div>
          <div className="stat-item">
            <span className="stat-label">Sai</span>
            <span className="stat-value wrong-stat">{total - correct}</span>
          </div>
          <div className="stat-divider">|</div>
          <div className="stat-item">
            <span className="stat-label">Tổng</span>
            <span className="stat-value">{total}</span>
          </div>
        </div>
      </div>

      {/* ── Per-question review ── */}
      <div className="review-list">
        {questions.map((q, i) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns === q.correctAnswer;
          const isExpanded = expandedIndex === i;

          // Map letter → option text
          const getOptionText = (letter) => {
            if (!letter) return 'Chưa trả lời';
            const idx = letter.charCodeAt(0) - 65;
            return q.options[idx] ?? letter;
          };

          return (
            <div
              key={q.id}
              className={`review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}`}
            >
              <button
                className="review-item-header"
                onClick={() => toggleExpand(i)}
              >
                <span className="review-index">
                  {isCorrect ? '✅' : '❌'} Câu {i + 1}
                </span>
                <span className="review-answer-short">
                  {isCorrect
                    ? `Đúng (${userAns})`
                    : userAns
                    ? `Sai: chọn ${userAns} · đúng ${q.correctAnswer}`
                    : `Bỏ trống · đúng ${q.correctAnswer}`}
                </span>
                <span className="review-chevron">{isExpanded ? '▲' : '▼'}</span>
              </button>

              {isExpanded && (
                <div className="review-item-body fade-in">
                  <p className="review-question-text">{q.question}</p>
                  <div className="review-options">
                    {q.options.map((opt, idx) => {
                      const letter = String.fromCharCode(65 + idx);
                      let cls = 'review-option';
                      if (letter === q.correctAnswer) cls += ' review-opt-correct';
                      else if (letter === userAns && !isCorrect) cls += ' review-opt-wrong';
                      else cls += ' review-opt-neutral';
                      return (
                        <div key={idx} className={cls}>
                          <span className="review-opt-letter">{letter}.</span>
                          {opt}
                          {letter === q.correctAnswer && (
                            <span className="review-correct-tag"> ✓ Đáp án đúng</span>
                          )}
                          {letter === userAns && !isCorrect && (
                            <span className="review-wrong-tag"> ✗ Bạn chọn</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Actions ── */}
      <div className="result-actions" style={{ marginTop: '2rem' }}>
        <button className="btn set-exam-btn" onClick={onRetry}>Thi lại bộ này</button>
        <button className="btn home-btn" onClick={onHome}>Về trang chủ</button>
      </div>
    </div>
  );
}

export default SetResultScreen;
