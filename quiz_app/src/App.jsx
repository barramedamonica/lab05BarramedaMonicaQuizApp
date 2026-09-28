import React, { useState } from 'react';
import WelcomeScreen from './Components/WelcomeScreen'; 
import QuestCard from './Components/QuestCard';
import ProgressBar from './Components/ProgressBar';
import ReportScreen from './Components/ReportScreen';

const LOCAL_QUESTIONS = [
  {
    "q": "Which planet in our solar system holds the record for having the highest number of confirmed orbiting moons?",
    "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "answer": "Saturn"
  },
  {
    "q": "What is the capital of France?",
    "options": ["Berlin", "London", "Paris", "Madrid"],
    "answer": "Paris"
  },
  {
    "q": "What is the largest mammal in the world?",
    "options": ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    "answer": "Blue Whale"
  },
  {
    "q": "Which programming language is primarily used for web development and is known for its versatility and wide adoption?",
    "options": ["Python", "JavaScript", "C++", "Java"],
    "answer": "JavaScript"
  },
  {
    "q": "What is the chemical symbol for gold?",
    "options": ["Au", "Ag", "Gd", "Go"],
    "answer": "Au"
  },
];
function App() {
  const [questions, setQuestions] = useState(LOCAL_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(-1); 
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleStart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
  };

  const handleSelectOption = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    const currentQuestion = questions[currentIndex];
    const isCorrect = currentQuestion.options[selectedOption] === currentQuestion.answer;
    
    if (isCorrect) setScore(score + 1);
    setHistory([...history, isCorrect ? "correct" : "incorrect"]);

    setCurrentIndex(currentIndex + 1);
    setSelectedOption(null);
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(-1); 
    setScore(0);         
    setHistory([]);      
    setSelectedOption(null);
  };

  if (currentIndex === -1) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (currentIndex >= questions.length) {
    return (
      <ReportScreen 
        score={score} 
        total={questions.length} 
        onRestart={handleRestartQuiz} 
      />
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <ProgressBar history={history} score={score} total={questions.length} />
      
      <QuestCard 
        question={questions[currentIndex]} 
        current={currentIndex} 
        onSelectOption={handleSelectOption}
        selectedOption={selectedOption} 
        onNext={handleNextQuestion}
      />
    </div>
  );
}

export default App;

