import React from 'react';

interface ModernCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ModernCard: React.FC<ModernCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800/50 p-6 md:p-8 rounded-lg border border-slate-700 transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 text-sky-400">
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


const ModernSection: React.FC = () => {
    const iconClass = "h-10 w-10";

    const modernData: ModernCardProps[] = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.036.243c-2.132 0-4.14-.834-5.657-2.343m-2.62-10.726c-1.01.143-2.01.317-3 .52m3-.52l-2.62 10.726c-.122.499.106 1.028.589 1.202a5.988 5.988 0 002.036.243c2.132 0 4.14-.834 5.657-2.343m0 0l-2.62 10.726" />
                </svg>
            ),
            title: "Bình đẳng giới",
            description: "Đây là yếu tố thay đổi rõ rệt nhất. Quyền bình đẳng nam nữ được đề cao hơn. Người phụ nữ không chỉ làm nội trợ mà còn tham gia tích cực vào các hoạt động kinh tế, xã hội, có tiếng nói và vị thế quan trọng trong gia đình."
        },
        {
            icon: (
                 <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.17 48.17 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            ),
            title: "Dân chủ trong gia đình",
            description: "Các quyết định lớn trong gia đình (như tài chính, giáo dục con cái) ngày càng được dân chủ hóa, thông qua sự bàn bạc, thống nhất giữa hai vợ chồng, thay vì sự áp đặt của người chồng/người cha như trước. Ý kiến của con cái cũng được lắng nghe và tôn trọng hơn."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.563c0-1.036.84-1.875 1.875-1.875h1.25A1.875 1.875 0 0114 9.563v1.875a1.875 1.875 0 01-1.875 1.875h-1.25A1.875 1.875 0 019 11.438V9.563z" />
                </svg>
            ),
            title: "Sự chia sẻ (Sharing)",
            description: "Đây là biểu hiện cụ thể của bình đẳng và dân chủ. Các thành viên trong gia đình hiện đại, đặc biệt là các cặp vợ chồng trẻ, có xu hướng cùng nhau chia sẻ công việc nhà, chăm sóc con cái và gánh vác trách nhiệm tài chính."
        }
    ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            4. Sự Tiếp thu các Yếu tố Hiện đại
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Song song với việc giữ gìn truyền thống, gia đình 4.0 tích cực tiếp nhận các giá trị mới, phù hợp với xu thế phát triển.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
            {modernData.map((item, index) => (
                <ModernCard 
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

export default ModernSection;