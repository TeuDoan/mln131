// FIX: Create a valid App component to assemble the application layout.
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroductionSection from './components/IntroductionSection';
import ContentSection from './components/ContentSection';
import AnalysisSection from './components/AnalysisSection';
import TraditionSection from './components/TraditionSection';
import ModernSection from './components/ModernSection';
import GuidanceSection from './components/GuidanceSection';
import GallerySection from './components/GallerySection';
import ConclusionSection from './components/ConclusionSection';
import Footer from './components/Footer';
import AppendixPage from './components/AppendixPage';
import Quiz from './components/Quiz';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [showAppendix, setShowAppendix] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  if (showAppendix) {
    return <AppendixPage onBack={() => setShowAppendix(false)} />;
  }

  if (showQuiz) {
    return <Quiz onBack={() => setShowQuiz(false)} />;
  }

  return (
    <div className="bg-slate-900 text-slate-200 antialiased">
      <Header onAction={() => setShowQuiz(true)} isQuiz={false} />
      <main>
        <Hero />
        <div id="introduction">
          <IntroductionSection />
        </div>
        <ContentSection />
        <div id="analysis">
          <AnalysisSection />
        </div>
        <div id="tradition">
          <TraditionSection />
        </div>
        <div id="modern">
          <ModernSection />
        </div>
        <div id="guidance">
          <GuidanceSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="conclusion">
          <ConclusionSection />
        </div>
      </main>
      <Footer onShowAppendix={() => setShowAppendix(true)} onShowQuiz={() => setShowQuiz(true)} isQuiz={false} />
      <Chatbot />
    </div>
  );
};

export default App;
