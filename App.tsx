import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroductionSection from './components/IntroductionSection';
import AnalysisSection from './components/AnalysisSection';
import TraditionSection from './components/TraditionSection';
import ModernSection from './components/ModernSection';
import GuidanceSection from './components/GuidanceSection';
import GallerySection from './components/GallerySection';
import ConclusionSection from './components/ConclusionSection';
import Footer from './components/Footer';
import AppendixPage from './components/AppendixPage';

const App: React.FC = () => {
  const [showAppendix, setShowAppendix] = useState(false);

  if (showAppendix) {
    return <AppendixPage onBack={() => setShowAppendix(false)} />;
  }

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="introduction">
            <IntroductionSection />
        </section>
        <section id="analysis">
            <AnalysisSection />
        </section>
        <section id="tradition">
            <TraditionSection />
        </section>
        <section id="modern">
            <ModernSection />
        </section>
        <section id="guidance">
            <GuidanceSection />
        </section>
        <section id="gallery">
            <GallerySection />
        </section>
        <section id="conclusion">
            <ConclusionSection />
        </section>
      </main>
      <Footer onShowAppendix={() => setShowAppendix(true)} />
    </div>
  );
};

export default App;