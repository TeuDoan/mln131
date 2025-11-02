
import React from 'react';
import InfoCard from './InfoCard';
import { cardData } from '../constants';

const ContentSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Những Góc Nhìn Đa Chiều</h3>
          <p className="mt-4 text-lg text-slate-400">Khám phá các khía cạnh định hình nên gia đình Việt Nam hiện đại.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
