import React, { useState, useCallback } from 'react';
import QuestionCard from './components/QuestionCard';
import ExamCard from './components/ExamCard';
import SetResultScreen from './components/SetResultScreen';
import questionsData from './data/questions.json';
import './App.css';

const MODES = {
  HOME: 'home',
  PRACTICE: 'practice',           // Ôn tập theo thứ tự
  PRACTICE_SHUFFLE: 'shuffle',    // Ôn tập xáo trộn
  EXAM: 'exam',                   // Thi thử 60 câu
  SET_SELECT: 'set_select',       // Chọn bộ đề
  SET_PRACTICE: 'set_practice',   // Ôn tập bộ đề 15 câu (thấy đáp án ngay)
  SET_EXAM: 'set_exam',           // Thi thử bộ đề 15 câu (nộp bài mới biết)
  SET_RESULT: 'set_result',       // Kết quả chi tiết bộ đề thi thử
  RESULT: 'result',
};

const EXAM_QUESTION_COUNT = 60;
const SET_SIZE = 15;

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Chia questionsData thành các bộ 15 câu cố định (theo thứ tự)
function buildSets(questions, size = SET_SIZE) {
  const sets = [];
  for (let i = 0; i < questions.length; i += size) {
    sets.push(questions.slice(i, i + size));
  }
  return sets;
}

const QUESTION_SETS = buildSets(questionsData);

function App() {
  const [mode, setMode] = useState(MODES.HOME);
  const [currentMode, setCurrentMode] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [practiceList, setPracticeList] = useState([]);
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({});

  // Bộ đề state
  const [selectedSetIndex, setSelectedSetIndex] = useState(null); // 0-based
  const [setQuestions, setSetQuestions] = useState([]);
  const [setAnswers, setSetAnswers] = useState({});
  const [setPracticeScore, setSetPracticeScore] = useState(0);

  // ---------- Practice (theo thứ tự) ----------
  const startPractice = () => {
    setPracticeList(questionsData);
    setCurrentIndex(0);
    setScore(0);
    setCurrentMode(MODES.PRACTICE);
    setMode(MODES.PRACTICE);
  };

  // ---------- Practice (xáo trộn) ----------
  const startShuffle = () => {
    setPracticeList(shuffleArray(questionsData));
    setCurrentIndex(0);
    setScore(0);
    setCurrentMode(MODES.PRACTICE_SHUFFLE);
    setMode(MODES.PRACTICE_SHUFFLE);
  };

  const handlePracticeAnswer = (isCorrect) => {
    if (isCorrect) setScore(s => s + 1);
  };

  const nextPracticeQuestion = () => {
    if (currentIndex < practiceList.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setMode(MODES.RESULT);
    }
  };

  // ---------- Exam Mode (60 câu) ----------
  const startExam = () => {
    const picked = shuffleArray(questionsData).slice(0, EXAM_QUESTION_COUNT);
    setExamQuestions(picked);
    setExamAnswers({});
    setCurrentIndex(0);
    setCurrentMode(MODES.EXAM);
    setMode(MODES.EXAM);
  };

  const handleExamAnswer = useCallback((questionId, selectedLetter) => {
    setExamAnswers(prev => ({ ...prev, [questionId]: selectedLetter }));
  }, []);

  const nextExamQuestion = () => {
    if (currentIndex < examQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      let correct = 0;
      examQuestions.forEach(q => {
        if (examAnswers[q.id] === q.correctAnswer) correct++;
      });
      setScore(correct);
      setMode(MODES.RESULT);
    }
  };

  // ---------- Bộ đề — chọn bộ ----------
  const openSetSelect = () => {
    setMode(MODES.SET_SELECT);
  };

  // ---------- Bộ đề — Ôn tập ----------
  const startSetPractice = (setIdx) => {
    setSelectedSetIndex(setIdx);
    setSetQuestions(QUESTION_SETS[setIdx]);
    setCurrentIndex(0);
    setSetPracticeScore(0);
    setCurrentMode(MODES.SET_PRACTICE);
    setMode(MODES.SET_PRACTICE);
  };

  const handleSetPracticeAnswer = (isCorrect) => {
    if (isCorrect) setSetPracticeScore(s => s + 1);
  };

  const nextSetPracticeQuestion = () => {
    if (currentIndex < setQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setScore(setPracticeScore);
      setCurrentMode(MODES.SET_PRACTICE);
      setMode(MODES.RESULT);
    }
  };

  // ---------- Bộ đề — Thi thử ----------
  const startSetExam = (setIdx) => {
    setSelectedSetIndex(setIdx);
    setSetQuestions(QUESTION_SETS[setIdx]);
    setSetAnswers({});
    setCurrentIndex(0);
    setCurrentMode(MODES.SET_EXAM);
    setMode(MODES.SET_EXAM);
  };

  const handleSetExamAnswer = useCallback((questionId, selectedLetter) => {
    setSetAnswers(prev => ({ ...prev, [questionId]: selectedLetter }));
  }, []);

  const nextSetExamQuestion = () => {
    if (currentIndex < setQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      // Nộp bài → vào SET_RESULT
      setMode(MODES.SET_RESULT);
    }
  };

  // ---------- Về trang chủ ----------
  const goHome = () => {
    setMode(MODES.HOME);
    setCurrentIndex(0);
    setScore(0);
    setExamAnswers({});
    setExamQuestions([]);
    setPracticeList([]);
    setSetQuestions([]);
    setSetAnswers({});
    setSelectedSetIndex(null);
    setSetPracticeScore(0);
    setCurrentMode(null);
  };

  // ---------- Result Screen (ôn tập toàn bộ + thi thử 60 câu) ----------
  const renderResult = () => {
    const isExam = currentMode === MODES.EXAM;
    const isSetPractice = currentMode === MODES.SET_PRACTICE;
    const total = isExam
      ? EXAM_QUESTION_COUNT
      : isSetPractice
      ? setQuestions.length
      : practiceList.length;
    const grade = (isExam || isSetPractice) ? ((score / total) * 10).toFixed(1) : null;
    const passed = grade ? parseFloat(grade) >= 3 : null;
    const isShuffle = currentMode === MODES.PRACTICE_SHUFFLE;

    return (
      <div className="result-section fade-in">
        <div className="result-icon">
          {(isExam || isSetPractice) ? (passed ? '🏆' : '😢') : '🎉'}
        </div>
        <h2 className="result-title">
          {(isExam || isSetPractice) ? (passed ? 'Đạt!' : 'Chưa đạt!') : 'Hoàn thành!'}
        </h2>

        {(isExam || isSetPractice) && (
          <div className={`grade-badge ${passed ? 'passed' : 'failed'}`}>
            {grade} / 10
          </div>
        )}

        {isSetPractice && (
          <p className="result-subtitle-tag">Bộ đề #{selectedSetIndex + 1} · Ôn tập</p>
        )}

        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-label">Số câu đúng</span>
            <span className="stat-value correct-stat">{score}</span>
          </div>
          <div className="stat-divider">|</div>
          <div className="stat-item">
            <span className="stat-label">Số câu sai</span>
            <span className="stat-value wrong-stat">{total - score}</span>
          </div>
          <div className="stat-divider">|</div>
          <div className="stat-item">
            <span className="stat-label">Tổng số câu</span>
            <span className="stat-value">{total}</span>
          </div>
        </div>

        {(isExam || isSetPractice) && (
          <p className="result-note">
            {passed
              ? `Bạn đã vượt qua ngưỡng điểm tối thiểu (3.0 / 10). Tiếp tục phát huy nhé! 💪`
              : `Điểm tối thiểu để đậu là 3.0 / 10. Hãy ôn tập thêm và thử lại! 📚`}
          </p>
        )}

        <div className="result-actions">
          {isExam ? (
            <>
              <button className="btn exam-again-btn" onClick={startExam}>Thi lại (60 câu mới)</button>
              <button className="btn home-btn" onClick={goHome}>Về trang chủ</button>
            </>
          ) : isSetPractice ? (
            <>
              <button className="btn set-practice-btn" onClick={() => startSetPractice(selectedSetIndex)}>Ôn lại bộ này</button>
              <button className="btn set-exam-btn" onClick={() => startSetExam(selectedSetIndex)}>Thi thử bộ này</button>
              <button className="btn home-btn" onClick={goHome}>Về trang chủ</button>
            </>
          ) : isShuffle ? (
            <>
              <button className="btn shuffle-again-btn" onClick={startShuffle}>Xáo trộn lại</button>
              <button className="btn home-btn" onClick={goHome}>Về trang chủ</button>
            </>
          ) : (
            <>
              <button className="btn restart-btn" onClick={startPractice}>Ôn tập lại</button>
              <button className="btn home-btn" onClick={goHome}>Về trang chủ</button>
            </>
          )}
        </div>
      </div>
    );
  };

  const isPracticeMode = mode === MODES.PRACTICE || mode === MODES.PRACTICE_SHUFFLE;
  const isShuffle = mode === MODES.PRACTICE_SHUFFLE;

  if (!questionsData || questionsData.length === 0) {
    return <div>Đang phân tích dữ liệu câu hỏi...</div>;
  }

  return (
    <div className="app-container">

      {/* ─── Home ─── */}
      {mode === MODES.HOME && (
        <div className="home-screen fade-in">
          <div className="home-logo">⭐</div>
          <div className="home-badge">★ BỘ QUỐC PHÒNG VIỆT NAM ★</div>
          <h1 className="home-title">GDQP & AN NINH</h1>
          <p className="home-subtitle">Giáo dục Quốc phòng &amp; An ninh</p>
          <div className="home-count-bar">
            🎯 &nbsp;{questionsData.length} câu hỏi &nbsp;·&nbsp; {QUESTION_SETS.length} bộ đề
          </div>

          <div className="mode-cards">
            <div className="mode-card" onClick={startPractice}>
              <div className="mode-icon">📖</div>
              <h3>Ôn tập theo thứ tự</h3>
              <p>Luyện tập toàn bộ {questionsData.length} câu từ đầu đến cuối, xem đáp án ngay.</p>
              <button className="btn practice-btn">Bắt đầu</button>
            </div>

            <div className="mode-card shuffle-card" onClick={startShuffle}>
              <div className="mode-icon">🔀</div>
              <h3>Ôn tập xáo trộn</h3>
              <p>Tất cả {questionsData.length} câu được xáo ngẫu nhiên, xem đáp án ngay.</p>
              <button className="btn shuffle-btn">Bắt đầu</button>
            </div>

            <div className="mode-card set-card" onClick={openSetSelect}>
              <div className="mode-icon">📚</div>
              <h3>Bộ đề (15 câu)</h3>
              <p>{QUESTION_SETS.length} bộ đề · Mỗi bộ 15 câu. Chọn <strong>ôn tập</strong> (thấy đáp án ngay) hoặc <strong>thi thử</strong> (chấm bài sau khi nộp).</p>
              <button className="btn set-btn">Chọn bộ đề</button>
            </div>

            <div className="mode-card exam-card" onClick={startExam}>
              <div className="mode-icon">📝</div>
              <h3>Thi thử (60 câu)</h3>
              <p>60 câu ngẫu nhiên, chấm điểm thang 10. Cần đạt <strong>≥ 3.0 điểm</strong> để đậu.</p>
              <button className="btn exam-btn">Bắt đầu thi thử</button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Chọn bộ đề ─── */}
      {mode === MODES.SET_SELECT && (
        <div className="set-select-screen fade-in">
          <div className="set-select-header">
            <button className="back-btn" onClick={goHome}>← Trang chủ</button>
            <h1 className="set-select-title">📚 Chọn bộ đề</h1>
          </div>
          <p className="set-select-subtitle">{QUESTION_SETS.length} bộ đề · mỗi bộ {SET_SIZE} câu</p>

          <div className="set-grid">
            {QUESTION_SETS.map((qs, i) => (
              <div key={i} className="set-card-item">
                <div className="set-card-number">Bộ {i + 1}</div>
                <div className="set-card-range">
                  Câu {i * SET_SIZE + 1} – {Math.min((i + 1) * SET_SIZE, questionsData.length)}
                </div>
                <div className="set-card-actions">
                  <button
                    className="btn set-practice-btn"
                    onClick={() => startSetPractice(i)}
                  >
                    📖 Ôn tập
                  </button>
                  <button
                    className="btn set-exam-btn"
                    onClick={() => startSetExam(i)}
                  >
                    🎯 Thi thử
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Practice / Shuffle ─── */}
      {isPracticeMode && practiceList.length > 0 && (
        <div className="quiz-section">
          <header className="quiz-header">
            <div className="header-left">
              <button className="back-btn" onClick={goHome}>← Trang chủ</button>
              <h1>{isShuffle ? '🔀 Xáo trộn' : '📖 Ôn tập'}</h1>
            </div>
            <div className="header-right">
              <span className={`score-badge ${isShuffle ? 'shuffle-badge' : ''}`}>✅ {score}</span>
              <span className="question-count">Câu {currentIndex + 1} / {practiceList.length}</span>
            </div>
          </header>

          <div className="progress-bar-wrap">
            <div
              className={`progress-bar ${isShuffle ? 'shuffle-progress' : ''}`}
              style={{ width: `${((currentIndex + 1) / practiceList.length) * 100}%` }}
            />
          </div>

          <QuestionCard
            questionData={practiceList[currentIndex]}
            onAnswer={handlePracticeAnswer}
            onNext={nextPracticeQuestion}
          />
        </div>
      )}

      {/* ─── Bộ đề — Ôn tập ─── */}
      {mode === MODES.SET_PRACTICE && setQuestions.length > 0 && (
        <div className="quiz-section">
          <header className="quiz-header">
            <div className="header-left">
              <button className="back-btn" onClick={() => setMode(MODES.SET_SELECT)}>← Bộ đề</button>
              <h1>📖 Ôn tập · Bộ {selectedSetIndex + 1}</h1>
            </div>
            <div className="header-right">
              <span className="score-badge set-practice-badge">✅ {setPracticeScore}</span>
              <span className="question-count">Câu {currentIndex + 1} / {setQuestions.length}</span>
            </div>
          </header>

          <div className="progress-bar-wrap">
            <div
              className="progress-bar set-practice-progress"
              style={{ width: `${((currentIndex + 1) / setQuestions.length) * 100}%` }}
            />
          </div>

          <QuestionCard
            questionData={setQuestions[currentIndex]}
            onAnswer={handleSetPracticeAnswer}
            onNext={nextSetPracticeQuestion}
          />
        </div>
      )}

      {/* ─── Bộ đề — Thi thử ─── */}
      {mode === MODES.SET_EXAM && setQuestions.length > 0 && (
        <div className="quiz-section">
          <header className="quiz-header">
            <div className="header-left">
              <button className="back-btn" onClick={() => setMode(MODES.SET_SELECT)}>← Bộ đề</button>
              <h1>🎯 Thi thử · Bộ {selectedSetIndex + 1}</h1>
            </div>
            <div className="header-right">
              <span className="score-badge exam-badge">
                {Object.keys(setAnswers).length} / {setQuestions.length} đã làm
              </span>
              <span className="question-count">Câu {currentIndex + 1} / {setQuestions.length}</span>
            </div>
          </header>

          <div className="progress-bar-wrap">
            <div
              className="progress-bar set-exam-progress"
              style={{ width: `${((currentIndex + 1) / setQuestions.length) * 100}%` }}
            />
          </div>

          <ExamCard
            questionData={setQuestions[currentIndex]}
            savedAnswer={setAnswers[setQuestions[currentIndex]?.id]}
            onAnswer={handleSetExamAnswer}
            onNext={nextSetExamQuestion}
            isLast={currentIndex === setQuestions.length - 1}
          />
        </div>
      )}

      {/* ─── Bộ đề — Kết quả thi thử (chi tiết từng câu) ─── */}
      {mode === MODES.SET_RESULT && (
        <SetResultScreen
          questions={setQuestions}
          userAnswers={setAnswers}
          setNumber={selectedSetIndex + 1}
          onRetry={() => startSetExam(selectedSetIndex)}
          onHome={goHome}
        />
      )}

      {/* ─── Exam (60 câu) ─── */}
      {mode === MODES.EXAM && examQuestions.length > 0 && (
        <div className="quiz-section">
          <header className="quiz-header">
            <div className="header-left">
              <button className="back-btn" onClick={goHome}>← Thoát</button>
              <h1>🎯 Thi thử</h1>
            </div>
            <div className="header-right">
              <span className="score-badge exam-badge">
                {Object.keys(examAnswers).length} / {EXAM_QUESTION_COUNT} đã làm
              </span>
              <span className="question-count">Câu {currentIndex + 1} / {EXAM_QUESTION_COUNT}</span>
            </div>
          </header>

          <div className="progress-bar-wrap">
            <div
              className="progress-bar exam-progress"
              style={{ width: `${((currentIndex + 1) / EXAM_QUESTION_COUNT) * 100}%` }}
            />
          </div>

          <ExamCard
            questionData={examQuestions[currentIndex]}
            savedAnswer={examAnswers[examQuestions[currentIndex]?.id]}
            onAnswer={handleExamAnswer}
            onNext={nextExamQuestion}
            isLast={currentIndex === examQuestions.length - 1}
          />
        </div>
      )}

      {/* ─── Result ─── */}
      {mode === MODES.RESULT && renderResult()}
    </div>
  );
}

export default App;
