import React from 'react';

interface TraditionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TraditionCard: React.FC<TraditionCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800/50 p-6 md:p-8 rounded-lg border border-slate-700 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 text-emerald-400">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};


const TraditionSection: React.FC = () => {
    const iconClass = "h-10 w-10";

    const traditionData: TraditionCardProps[] = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            ),
            title: "Chữ Hiếu (Hiếu nghĩa)",
            description: "Lòng hiếu thảo với cha mẹ, ông bà vẫn là chuẩn mực đạo đức quan trọng nhất. Hình thức thể hiện có thể thay đổi (ví dụ: chăm sóc qua thiết bị công nghệ, gửi tiền chu cấp), nhưng trách nhiệm phụng dưỡng cha mẹ khi về già vẫn được xã hội đề cao."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
                </svg>
            ),
            title: "Sự Thủy chung",
            description: "Mặc dù tỷ lệ ly hôn gia tăng, sự thủy chung vẫn được coi là nền tảng vàng của hôn nhân bền vững. Đây vẫn là giá trị được xã hội và các cặp vợ chồng hướng đến để xây dựng gia đình hạnh phúc."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.289 2.72a3 3 0 01-4.682-2.72 9.094 9.094 0 013.741-.479m7.289 2.72a8.97 8.97 0 01-3.741.479m3.741-.479a8.97 8.97 0 00-3.741-.479m-7.289 2.72a9.094 9.094 0 00-3.741-.479m14.722 0a3 3 0 014.682 2.72m-4.682-2.72a3 3 0 00-4.682 2.72m4.682 2.72a8.97 8.97 0 01-3.741.479m-7.289 2.72a8.97 8.97 0 00-3.741.479m14.722 0a9.094 9.094 0 003.741-.479M12 15a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
            ),
            title: "Tinh thần Tương trợ (Đoàn kết)",
            description: "Truyền thống 'lá lành đùm lá rách', sự tương trợ, đùm bọc lẫn nhau giữa anh chị em, họ hàng khi gặp khó khăn vẫn là một nét đẹp văn hóa, dù có thể không còn khăng khít như trong mô hình gia đình truyền thống."
        }
    ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            3. Sự Gìn giữ các Giá trị Truyền thống
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Dù đối mặt với nhiều biến đổi, các giá trị cốt lõi của gia đình Việt Nam vẫn được duy trì và xem là nền tảng.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
            {traditionData.map((item, index) => (
                <TraditionCard 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TraditionSection;