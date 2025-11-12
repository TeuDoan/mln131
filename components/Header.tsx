import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onAction: () => void;
  isQuiz?: boolean;
}

const navLinks = [
  { href: '#introduction', label: 'Toàn Cảnh' },
  { href: '#analysis', label: 'Phân Tích' },
  { href: '#tradition', label: 'Giá Trị Truyền Thống' },
  { href: '#modern', label: 'Yếu Tố Hiện Đại' },
  { href: '#guidance', label: 'Định Hướng' },
  { href: '#gallery', label: 'Khoảnh Khắc' },
  { href: '#conclusion', label: 'Kết Luận' },
];

const Header: React.FC<HeaderProps> = ({ onAction, isQuiz = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900/70 backdrop-blur-lg border-b border-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                Gia Đình Việt 4.0
              </a>
            </div>
            
            {/* Desktop Navigation */}
            {!isQuiz && (
              <nav className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}
            <button
              onClick={onAction}
              className={`font-medium py-1 px-3 rounded transition-colors ${
                isQuiz
                  ? 'text-sm text-slate-300 hover:text-sky-400'
                  : 'text-sm bg-sky-600 hover:bg-sky-700 text-white'
              }`}
            >
              {isQuiz ? 'Quay lại' : 'Câu hỏi ôn tập'}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu (hamburger) */}
                <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon for close (X) */}
                <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden" id="mobile-menu">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className="relative h-full flex flex-col items-center justify-center space-y-6">
            {!isQuiz && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-bold text-slate-200 hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { onAction(); setIsMenuOpen(false); }}
              className={`font-bold transition-colors ${
                isQuiz
                  ? 'text-2xl text-slate-200 hover:text-sky-400'
                  : 'text-2xl bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded'
              }`}
            >
              {isQuiz ? 'Quay lại' : 'Câu hỏi ôn tập'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;