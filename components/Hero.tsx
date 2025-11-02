import React from 'react';

const Hero: React.FC = () => {
  // The image provided by the user.
  const heroImageUrl = 'https://baonamdinh.vn/file/e7837c02816d130b0181a995d7ad7e96/dataimages/201906/original/images1317042_1.jpg';

  return (
    <section 
      className="relative py-28 sm:py-36 lg:py-48 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
      aria-labelledby="hero-title"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/70"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
          Gia đình Việt Nam thời kỳ 4.0
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-200 drop-shadow-md">
          Giữa Dòng Chảy Truyền Thống và Làn Sóng Hiện Đại
        </p>
      </div>
    </section>
  );
};

export default Hero;