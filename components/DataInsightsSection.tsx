import React, { useState, useEffect, useRef } from 'react';

// Custom hook to detect when an element enters the viewport
const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};

// Component to animate numbers counting up
const AnimatedNumber = ({ value, duration = 1500 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    if (isVisible) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * valueRef.current));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isVisible, duration]);

  return <span ref={ref}>{count.toLocaleString('vi-VN')}</span>;
};

// Chart: Urbanization Impact
const UrbanizationChart = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const data = [
    { year: 1990, rate: 20.2 },
    { year: 2010, rate: 30.5 },
    { year: 2023, rate: 42.6 },
    { year: 2030, rate: 50, isProjection: true },
  ];

  return (
    <div ref={ref} className="w-full space-y-4 pt-4" role="figure" aria-label="Biểu đồ Tỷ lệ đô thị hóa tại Việt Nam">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="w-20 text-sm font-semibold text-slate-300">
            {item.year} {item.isProjection && '*'}
          </span>
          <div className="flex-1 bg-slate-700/50 rounded-full h-6 overflow-hidden">
            <div
              className="bg-rose-500 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
              style={{ width: isVisible ? `${item.rate}%` : '0%' }}
            >
              <span className="text-white text-xs font-bold">{item.rate}%</span>
            </div>
          </div>
        </div>
      ))}
      <p className="text-xs text-slate-400 text-right italic">*Dự báo</p>
    </div>
  );
};


// Chart: Market Economy Impact
const MarketEconomyImpact = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const data = {
    vietnam: 72.5,
    world: 48.5,
  };

  return (
    <div ref={ref} className="w-full h-64 flex justify-around pt-4" role="figure" aria-label="Biểu đồ so sánh tỷ lệ nữ giới tham gia lao động">
      <div className="flex flex-col items-center justify-end">
        <div
          className="w-16 bg-rose-500 rounded-t-md transition-all duration-1000 ease-out flex items-center justify-center"
          style={{ height: isVisible ? `${data.vietnam}%` : '0%' }}
        >
          <span className="text-white font-bold text-sm transform -rotate-90 whitespace-nowrap">{data.vietnam}%</span>
        </div>
        <span className="mt-2 text-sm font-semibold text-slate-200">Việt Nam</span>
      </div>
      <div className="flex flex-col items-center justify-end">
        <div
          className="w-16 bg-slate-600 rounded-t-md transition-all duration-1000 ease-out flex items-center justify-center"
          style={{ height: isVisible ? `${data.world}%` : '0%' }}
        >
          <span className="text-white font-bold text-sm transform -rotate-90 whitespace-nowrap">{data.world}%</span>
        </div>
        <span className="mt-2 text-sm font-semibold text-slate-200">Thế giới</span>
      </div>
    </div>
  );
};

// Stats: Global Integration Impact
const GlobalIntegrationImpact = () => {
    return (
        <div className="w-full space-y-6 pt-4">
            <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <div className="text-4xl font-extrabold text-rose-400">
                    ~<AnimatedNumber value={18000} />+
                </div>
                <p className="mt-2 text-slate-300">lượt kết hôn với người nước ngoài mỗi năm.</p>
            </div>
             <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <div className="text-4xl font-extrabold text-rose-400">
                    ~<AnimatedNumber value={200000} />+
                </div>
                <p className="mt-2 text-slate-300">sinh viên, nghiên cứu sinh đang học tập tại nước ngoài.</p>
            </div>
        </div>
    )
}


const DataInsightsSection: React.FC = () => {
  const cards = [
    {
      title: 'Tác động của Đô thị hóa',
      description: 'Sự dịch chuyển dân cư từ nông thôn ra thành thị đã thúc đẩy mạnh mẽ quá trình chuyển đổi từ gia đình truyền thống nhiều thế hệ sang gia đình hạt nhân.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      chart: <UrbanizationChart />,
    },
    {
      title: 'Tác động của Kinh tế Thị trường',
      description: 'Kinh tế thị trường đề cao vai trò cá nhân, tạo điều kiện cho phụ nữ tham gia sâu rộng vào lực lượng lao động, từ đó khẳng định vị thế và tiếng nói trong gia đình.',
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      chart: <MarketEconomyImpact />,
    },
    {
      title: 'Tác động của Hội nhập Quốc tế',
      description: 'Giao lưu văn hóa và di chuyển toàn cầu mở ra những hình thái gia đình mới, đa dạng hơn về văn hóa và đặt ra các vấn đề mới về duy trì bản sắc.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.5-1.5a.5.5 0 01.95.318l-.5 1.5m0 0l.5 1.5a.5.5 0 01-.95.318l-.5-1.5m-3.414-3.414l1.06-1.06a.5.5 0 01.707 0l1.06 1.06m-2.122 2.122l1.06 1.06a.5.5 0 010 .707l-1.06 1.06M15.707 4.293l-.5-1.5a.5.5 0 00-.95.318l.5 1.5m0 0l-.5 1.5a.5.5 0 00.95.318l.5-1.5m3.414-3.414l-1.06-1.06a.5.5 0 00-.707 0l-1.06 1.06m2.122 2.122l-1.06 1.06a.5.5 0 000 .707l1.06 1.06" />
        </svg>
      ),
      chart: <GlobalIntegrationImpact />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Dữ liệu Biết nói: Việt Nam Chuyển mình
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Phân tích các tác động chính đã định hình nên gia đình Việt Nam hiện đại qua những con số.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-slate-800/50 p-6 md:p-8 rounded-lg border border-slate-700 flex flex-col transition-all duration-300 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 text-rose-400">{card.icon}</div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{card.description}</p>
              <div className="mt-auto">
                {card.chart}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataInsightsSection;