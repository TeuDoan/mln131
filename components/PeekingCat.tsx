import React, { useState, useEffect, useRef } from 'react';

const PeekingCat: React.FC = () => {
  const [isPeeking, setIsPeeking] = useState(false);
  const isAnimating = useRef(false);
  const lastTriggerTime = useRef(0);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll event
      if (scrollTimeout.current) {
        return;
      }

      scrollTimeout.current = window.setTimeout(() => {
        const now = Date.now();
        const cooldown = 10000; // 10 seconds cooldown

        // Check conditions to show the cat
        if (
          !isAnimating.current &&
          now - lastTriggerTime.current > cooldown &&
          window.scrollY > 300 && // Only show after some scrolling
          Math.random() < 0.1 // 30% chance to appear on scroll
        ) {
          isAnimating.current = true;
          lastTriggerTime.current = now;
          setIsPeeking(true);

          // Animation sequence
          setTimeout(() => {
            setIsPeeking(false);
            // Wait for the hiding animation to finish before allowing another trigger
            setTimeout(() => {
              isAnimating.current = false;
            }, 1000); // Corresponds to animation duration
          }, 3500); // Total time the cat is visible/looking
        }
        scrollTimeout.current = null;
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 left-8 w-40 h-28 transition-transform duration-1000 ease-in-out z-40 pointer-events-none ${
          isPeeking ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-hidden="true"
      >
        {/* ===== BẮT ĐẦU MÃ SVG MỚI (VÍ DỤ) ===== */}
        <svg viewBox="0 0 200 130" className="w-full h-full drop-shadow-lg">
          {/* Paws */}
          <path d="M50 130 C 40 120, 30 125, 30 110" stroke="#475569" strokeWidth="15" fill="none" strokeLinecap="round"/>
          <path d="M150 130 C 160 120, 170 125, 170 110" stroke="#475569" strokeWidth="15" fill="none" strokeLinecap="round"/>

          {/* Head group for animation */}
          <g className={isPeeking ? 'animate-look-around' : ''}>
            {/* Head */}
            <path d="M40,100 C40,40 160,40 160,100" fill="#475569" />
            
            {/* Ears */}
            <path d="M40,55 C20,10 80,30 70,60" fill="#475569" />
            <path d="M160,55 C180,10 120,30 130,60" fill="#475569" />
            <path d="M50,55 C40,30 75,40 70,58" fill="#334155" />
            <path d="M150,55 C160,30 125,40 130,58" fill="#334155" />

            {/* Eyes */}
            <circle cx="80" cy="75" r="12" fill="white" />
            <circle cx="120" cy="75" r="12" fill="white" />
            <circle cx="80" cy="75" r="6" fill="black" />
            <circle cx="120" cy="75" r="6" fill="black" />

            {/* Nose & Mouth */}
            <path d="M95,88 Q100,95 105,88" fill="#f472b6" />
            <path d="M100,95 C95,105 85,100 85,95" stroke="black" strokeWidth="2" fill="none" />
            <path d="M100,95 C105,105 115,100 115,95" stroke="black" strokeWidth="2" fill="none" />
          </g>
        </svg>
        {/* ===== KẾT THÚC MÃ SVG MỚI (VÍ DỤ) ===== */}

      </div>
      <style>{`
        @keyframes look-around {
          0%, 100% { transform: translateX(0) rotate(0); transform-origin: center bottom; }
          20% { transform: translateX(-8px) rotate(-5deg); transform-origin: center bottom; }
          40% { transform: translateX(-8px) rotate(-5deg); transform-origin: center bottom; }
          60% { transform: translateX(8px) rotate(5deg); transform-origin: center bottom; }
          80% { transform: translateX(8px) rotate(5deg); transform-origin: center bottom; }
        }
        .animate-look-around {
          animation: look-around 2.5s ease-in-out 0.8s;
        }
      `}</style>
    </>
  );
};

export default PeekingCat;
