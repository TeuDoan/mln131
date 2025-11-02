import React from 'react';

interface GuidanceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GuidanceCard: React.FC<GuidanceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col h-full bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10">
      <div className="mb-4 text-amber-400">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

const GuidanceSection: React.FC = () => {
  const iconClass = "h-10 w-10";

  const guidanceData: GuidanceCardProps[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5-1.5-.545M3 12l3-1m0 0l.5 1.5m-.5-1.5l-1.5.545m3.75 7.5l-1.5-.545m0 0l-1.5.545m0 0l-1.5-.545m2.25 2.25l-1.5-.545M15.75 15l1.5-.545m0 0l1.5.545m0 0l1.5-.545m-1.5-.545l1.5.545" />
        </svg>
      ),
      title: "1. Ấm no & Hạnh phúc",
      description: "Xây dựng gia đình \"ấm no, hoà thuận, tiến bộ, khoẻ mạnh và hạnh phúc\". Đây là sự kết hợp giữa giá trị hiện đại (ấm no, tiến bộ) và giá trị truyền thống (hòa thuận, hạnh phúc)."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      title: "2. Nghĩa vụ Công dân",
      description: "Các thành viên trong gia đình phải \"Thực hiện tốt nghĩa vụ công dân\", gắn kết trách nhiệm của gia đình với sự phát triển chung của xã hội."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
      title: "3. Kế hoạch hóa",
      description: "Gia đình hiện đại cần \"Thực hiện kế hoạch hoá gia đình\". Nội dung này liên kết trực tiếp với chiến dịch dân số đã được đề cập trước đó."
    },
    {
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.289 2.72a3 3 0 01-4.682-2.72 9.094 9.094 0 013.741-.479m7.289 2.72a8.97 8.97 0 01-3.741.479m3.741-.479a8.97 8.97 0 00-3.741-.479m-7.289 2.72a9.094 9.094 0 00-3.741-.479m14.722 0a3 3 0 014.682 2.72m-4.682-2.72a3 3 0 00-4.682 2.72m4.682 2.72a8.97 8.97 0 01-3.741.479m-7.289 2.72a8.97 8.97 0 00-3.741-.479m14.722 0a9.094 9.094 0 003.741-.479M12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
      title: "4. Đoàn kết Tương trợ",
      description: "Giữ gìn giá trị truyền thống về \"Đoàn kết tương trợ trong cộng đồng dân cư\", phát huy tinh thần \"lá lành đùm lá rách\" của người Việt."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            5. Định Hướng Cho Gia Đình 4.0: Phong Trào "Gia Đình Văn Hóa"
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-4xl mx-auto">
            Trước những biến đổi sâu sắc của thời đại mới, một trong những "phương hướng cơ bản" và là phong trào thi đua lâu dài nhất nhằm định hướng các giá trị gia đình chính là "Phong trào Xây dựng Gia đình văn hóa".
          </p>
           <p className="mt-4 text-lg text-slate-400 max-w-4xl mx-auto">
            Đây là nỗ lực của toàn xã hội nhằm "phát huy giá trị đạo đức truyền thống" đồng thời hướng các gia đình tới một "mô hình gia đình tiến bộ", cân bằng giữa Truyền thống và Hiện đại.
          </p>
        </div>
        
        <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Các Tiêu Chí Cốt Lõi Của Một "Gia Đình Văn Hóa"</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {guidanceData.map((item, index) => (
                <GuidanceCard 
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

export default GuidanceSection;