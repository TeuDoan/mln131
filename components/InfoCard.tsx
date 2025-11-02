
import React from 'react';
import type { CardData } from '../types';

const InfoCard: React.FC<CardData> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10">
      <div className="mb-4 text-sky-400">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
