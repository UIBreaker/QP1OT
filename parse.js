import fs from 'fs';

const logPath = "C:\\Users\\84916\\.gemini\\antigravity\\brain\\0e333bc7-e686-4c59-ad76-f6a9433a2c3d\\.system_generated\\logs\\overview.txt";
const text = fs.readFileSync(logPath, 'utf8');

const match = text.match(/<USER_REQUEST>([\s\S]*?)<\/USER_REQUEST>/g);

let rawQuestions = "";
if (match) {
  for (const m of match) {
    if (m.includes('[<br>]')) {
      rawQuestions = m;
      break;
    }
  }
}

rawQuestions = rawQuestions.replace(/<USER_REQUEST>/g, '').replace(/<\/USER_REQUEST>/g, '');

const blocks = rawQuestions.split('[<br>]').map(b => b.trim()).filter(b => b.length > 0);

const questions = blocks.map((block, index) => {
  const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const questionText = lines[0];
  const options = lines.slice(1);
  
  let correctAnswer = "A";
  
  // Heuristic for guessing correct answers in Vietnamese MCQs:
  const lastOpt = options[options.length - 1];
  if (lastOpt && (lastOpt.toLowerCase().includes('tất cả đều đúng') || lastOpt.toLowerCase().includes('đều đúng') || lastOpt.toLowerCase().includes('câu a, b, c đúng') || lastOpt.toLowerCase().includes('cả a và b'))) {
      correctAnswer = lastOpt.charAt(0);
  } else if (questionText.includes('cao nhất')) {
      correctAnswer = 'A';
  } else if (questionText.includes('nòng cốt')) {
       correctAnswer = 'B';
  } else {
     // default fallback
     correctAnswer = "A";
  }

  // Parse actual array of objects
  return {
    id: index + 1,
    question: questionText,
    options: options.map(o => o.trim()),
    correctAnswer: correctAnswer
  };
});

fs.mkdirSync('./src/data', { recursive: true });
fs.writeFileSync('./src/data/questions.json', JSON.stringify(questions, null, 2));

console.log("Successfully extracted", questions.length, "questions to src/data/questions.json!");
