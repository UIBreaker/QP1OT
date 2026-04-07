import fs from 'fs';

try {
  let raw = fs.readFileSync('./QP1_full.md', 'utf8');
  
  // Split the markdown by horizontal rule or "## Câu "
  let questionBlocks = raw.split(/## Câu \d+/).map(b => b.trim()).filter(b => b.length > 0);
  
  let questions = [];

  questionBlocks.forEach((block, idx) => {
      // Find the question text
      let questionMatch = block.match(/\*\*(.*?)\*\*/);
      if(!questionMatch) return;
      let questionText = questionMatch[1].trim();

      // Find options
      // Options are listed as "- A. text", "- B. text"
      let options = [];
      let lines = block.split('\n');
      for(let line of lines) {
          line = line.trim();
          if(line.startsWith('- A.') || line.startsWith('- B.') || line.startsWith('- C.') || line.startsWith('- D.')) {
              // we can strip the "- " part
              options.push(line.replace(/^- /, '').trim());
          }
      }

      // Find answer
      let answerMatch = block.match(/\*\*Đáp án:\*\*\s*([A-D])/);
      let answer = answerMatch ? answerMatch[1] : 'A'; // fallback to A if not found

      if(options.length > 0) {
          questions.push({
             id: idx + 1,
             question: questionText,
             options: options,
             correctAnswer: answer
          });
      }
  });

  fs.mkdirSync('./src/data', { recursive: true });
  fs.writeFileSync('./src/data/questions.json', JSON.stringify(questions, null, 2));
  console.log('Successfully written ' + questions.length + ' questions from QP1_full.md to src/data/questions.json');
} catch (e) {
  console.error("Error generating JSON: ", e);
}
