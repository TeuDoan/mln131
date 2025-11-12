import React, { useState, useEffect } from 'react';
import quizDataRaw from '../data/quiz.json';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface QuizData {
  quiz: Question[];
}

const quizData: QuizData = quizDataRaw as QuizData;

const Quiz: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    const shuffled = [...quizData.quiz].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    setCurrentQuestions(selected);
    setCurrentPage('quiz');
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setScore(0);
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score
      let correct = 0;
      currentQuestions.forEach((q, i) => {
        if (selectedAnswers[i] === q.answer) correct++;
      });
      setScore(correct);
      setCurrentPage('result');
    }
  };

  const restartQuiz = () => {
    setCurrentPage('start');
  };

  if (currentPage === 'start') {
    return (
      <div className="bg-slate-900 text-slate-200 antialiased">
        <Header onAction={onBack} isQuiz={true} />
        <main className="min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto p-6 bg-slate-800 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-4">Quiz Gia Đình Việt 4.0</h1>
            <p className="text-center mb-6">Trả lời 10 câu hỏi ngẫu nhiên về gia đình Việt Nam.</p>
            <button
              onClick={startQuiz}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Bắt Đầu Quiz
            </button>
          </div>
        </main>
        <Footer onShowAppendix={() => {}} onShowQuiz={onBack} isQuiz={true} />
        <Chatbot />
      </div>
    );
  }

  if (currentPage === 'quiz') {
    const question = currentQuestions[currentQuestionIndex];
    return (
      <div className="bg-slate-900 text-slate-200 antialiased">
        <Header onAction={onBack} isQuiz={true} />
        <main className="min-h-screen flex items-center justify-center py-12">
          <div className="max-w-2xl mx-auto p-6 bg-slate-800 rounded-lg shadow-lg">
            <div className="mb-4">
              <span className="text-sm text-slate-400">Câu {currentQuestionIndex + 1} / {currentQuestions.length}</span>
            </div>
            <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full text-left p-3 rounded border transition-colors ${
                    selectedAnswers[currentQuestionIndex] === option
                      ? 'bg-sky-600 border-sky-600 text-white'
                      : 'bg-slate-700 border-slate-600 hover:bg-slate-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={nextQuestion}
              disabled={!selectedAnswers[currentQuestionIndex]}
              className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors"
            >
              {currentQuestionIndex < currentQuestions.length - 1 ? 'Tiếp Theo' : 'Hoàn Thành'}
            </button>
          </div>
        </main>
        <Footer onShowAppendix={() => {}} onShowQuiz={onBack} isQuiz={true} />
        <Chatbot />
      </div>
    );
  }

  if (currentPage === 'result') {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="bg-slate-900 text-slate-200 antialiased">
        <Header onAction={onBack} isQuiz={true} />
        <main className="min-h-screen py-12">
          <div className="max-w-4xl mx-auto p-6">
            <div className="bg-slate-800 rounded-lg shadow-lg p-8 text-center mb-8">
              <h1 className="text-3xl font-bold mb-6">Kết Quả Quiz</h1>
              <div className="flex justify-center items-center mb-6">
                <div className="relative">
                  <svg width="140" height="140" className="transform -rotate-90">
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      stroke="#374151"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      stroke="#10b981"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{percentage}%</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-slate-300 mb-6">
                Bạn trả lời đúng <span className="text-emerald-400 font-semibold">{score}</span> / {currentQuestions.length} câu.
              </p>
              <button
                onClick={restartQuiz}
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Làm Lại Quiz
              </button>
            </div>

            <div className="bg-slate-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Xem Lại Câu Trả Lời</h2>
              <div className="space-y-6">
                {currentQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.answer;
                  return (
                    <div key={index} className="border border-slate-700 rounded-lg p-4">
                      <h3 className="font-semibold mb-3 text-slate-200">
                        Câu {index + 1}: {question.question}
                      </h3>
                      <div className="space-y-2">
                        <div className={`p-2 rounded ${isCorrect ? 'bg-emerald-900/50 border border-emerald-500' : 'bg-red-900/50 border border-red-500'}`}>
                          <span className="text-sm text-slate-400">Đáp án của bạn: </span>
                          <span className={isCorrect ? 'text-emerald-400' : 'text-red-400'}>{userAnswer}</span>
                          {isCorrect && <span className="ml-2 text-emerald-400">✓</span>}
                          {!isCorrect && <span className="ml-2 text-red-400">✗</span>}
                        </div>
                        {!isCorrect && (
                          <div className="p-2 rounded bg-slate-700/50 border border-slate-600">
                            <span className="text-sm text-slate-400">Đáp án đúng: </span>
                            <span className="text-sky-400">{question.answer}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <Footer onShowAppendix={() => {}} onShowQuiz={onBack} isQuiz={true} />
        <Chatbot />
      </div>
    );
  }

  return null;
};

export default Quiz;