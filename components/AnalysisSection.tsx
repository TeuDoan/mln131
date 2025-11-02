import React from 'react';
import FamilyStructureChart from './FamilyStructureChart';

interface AnalysisCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800/50 p-6 md:p-8 rounded-lg border border-slate-700 transition-all duration-300 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 text-violet-400">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="text-slate-300 leading-relaxed">{description}</div>
        </div>
      </div>
    </div>
  );
};

const AnalysisSection: React.FC = () => {
    const iconClass = "h-10 w-10";

    const analysisData: AnalysisCardProps[] = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.318.232-.656.328-1.014a6.375 6.375 0 01-1.06-7.554c1.543-.96 3.335-1.63 5.237-1.84" />
                </svg>
            ),
            title: "1. Biến đổi về Cấu trúc & Quy mô",
            description: (
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Chuyển đổi mô hình:</strong> Gia đình truyền thống nhiều thế hệ ("tam đại đồng đường") đang được thay thế bằng mô hình gia đình hạt nhân (hai thế hệ: cha mẹ - con cái).
                </li>
                <li>
                  <strong>Thu hẹp quy mô:</strong> Số con trong mỗi gia đình ít đi do việc sinh đẻ được kiểm soát chủ động và nhu cầu "nhất thiết phải có con trai" đã giảm bớt.
                </li>
                <li>
                  <strong>Đa dạng hóa:</strong> Xuất hiện các mô hình gia đình mới như gia đình đơn thân, chung sống không kết hôn, và hôn nhân đồng giới.
                </li>
              </ul>
            )
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
            ),
            title: "2. Biến đổi về Thực hiện các Chức năng",
            description: (
              <>
                <p className="mb-4 italic text-slate-400">"Trụ Cột" Gia đình Thay Đổi Như Thế Nào?</p>
                <ul className="space-y-3">
                  <li>
                    <strong className="font-semibold text-white">Kinh tế:</strong> Gia đình không còn là đơn vị "tự cấp tự túc" mà đã trở thành một "đơn vị kinh tế hàng hoá", một bộ phận quan trọng của nền kinh tế quốc dân.
                  </li>
                  <li>
                    <strong className="font-semibold text-white">Giáo dục:</strong> Vai trò giáo dục của gia đình có xu hướng giảm sút khi "giáo dục xã hội bao trùm lên giáo dục gia đình". Cha mẹ có ít thời gian hơn, phó mặc cho nhà trường.
                  </li>
                  <li>
                    <strong className="font-semibold text-white">Tình cảm:</strong> Chức năng này được đề cao hơn. Gia đình chuyển từ "chủ yếu là đơn vị kinh tế sang chủ yếu là đơn vị tình cảm".
                  </li>
                </ul>
              </>
            )
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 4.186m0-4.186c.18.32.323.672.425 1.055m-1.732 2.131a2.25 2.25 0 001.732 0m-1.732 0l-1.732 2.131c-.426.521-.026 1.307.638 1.307h4.441a1.001 1.001 0 00.894-.553l7.217-8.907c.245-.303.014-.764-.354-.764H11.25a2.25 2.25 0 00-2.25 2.25v.093c.01.04.018.08.026.12m0-3.006l-1.732-2.131c-.426-.521.026-1.307.638-1.307h4.441a1.001 1.001 0 00.894.553l7.217 8.907c.245.303.014-.764-.354-.764H11.25a2.25 2.25 0 00-2.25 2.25v.093c.01.04.018.08.026.12m0 0a2.25 2.25 0 100 4.186m0-4.186m0 0c.18.32.323.672.425 1.055m-1.732 2.131a2.25 2.25 0 001.732 0m0 0l-1.732 2.131" />
                </svg>
            ),
            title: "3. Biến đổi về các Mối quan hệ",
            description: (
              <>
                <p className="mb-4 italic text-slate-400">Thách Thức Trong Các Mối Quan Hệ</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Quan hệ Vợ - Chồng:</strong> Trở nên "lỏng lẻo" hơn. Tỷ lệ ly hôn, ly thân, ngoại tình và sống thử (chung sống không kết hôn) gia tăng.
                  </li>
                  <li>
                    <strong>Quan hệ Thế hệ:</strong> Đây là "thách thức lớn nhất". Xảy ra mâu thuẫn do khác biệt giá trị: người già "hướng về các giá trị truyền thống", trong khi tuổi trẻ "hướng tới những giá trị hiện đại".
                  </li>
                </ul>
              </>
            )
        }
    ];

    // ===== ĐÂY LÀ NƠI ĐỂ THAY LINK ẢNH CỦA BẠN =====
    const traditionalFamilyImageUrl = 'https://afamilycdn.com/k:vccccccccccccZjB8YmlKbNA5ZNIuC/Image/2013/06/gia-dinh-tu-san-f614e/gia-dinh-viet-ngay-ay-bay-gio.jpg'; // Ảnh gia đình truyền thống
    const modernFamilyImageUrl = 'https://wikitienganh.com/wp-content/uploads/2021/10/nuclear-family-1024x683.jpg';     // Ảnh gia đình hiện đại
    const relationshipConflictImageUrl = 'https://baothainguyen.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/062025/gia-dinh-1_20250612180106.jpg'; // Ảnh mâu thuẫn thế hệ
    // =================================================

    const structureCardData = analysisData[0];
    const functionCardData = analysisData[1];
    const relationCardData = analysisData[2];

    const OldCampaignIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-violet-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
    );

    const ModernCampaignIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-sky-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
    );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            2. Phân tích Sự biến đổi của Gia đình Việt Nam
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Sự chuyển đổi này diễn ra trên nhiều phương diện cốt lõi, từ cấu trúc, chức năng cho đến các mối quan hệ bên trong gia đình.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Card đầu tiên về Cấu trúc */}
            <AnalysisCard {...structureCardData} />

            {/* Biểu đồ thể hiện sự chuyển dịch */}
            <FamilyStructureChart />

            {/* Khu vực so sánh hình ảnh */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <figure className="group text-center bg-slate-800/40 p-3 rounded-lg border border-slate-700">
                    <div className="overflow-hidden rounded aspect-[4/3]">
                        <img 
                            src={traditionalFamilyImageUrl} 
                            alt="Gia đình truyền thống nhiều thế hệ" 
                            className="w-full h-full object-cover grayscale transition-transform duration-500 ease-in-out scale-110 group-hover:scale-100"
                        />
                    </div>
                    <figcaption className="mt-3 text-sm font-semibold text-slate-300 tracking-wider uppercase">
                        Trước: Gia đình đa thế hệ
                    </figcaption>
                </figure>
                <figure className="group text-center bg-slate-800/40 p-3 rounded-lg border border-slate-700">
                    <div className="overflow-hidden rounded aspect-[4/3]">
                        <img 
                            src={modernFamilyImageUrl} 
                            alt="Gia đình hạt nhân hiện đại" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out scale-110 group-hover:scale-100"
                        />
                    </div>
                    <figcaption className="mt-3 text-sm font-semibold text-slate-300 tracking-wider uppercase">
                        Sau: Gia đình hạt nhân
                    </figcaption>
                </figure>
            </div>
            
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                    "Cuộc Vận Động" Thay Đổi Cấu Trúc Gia Đình
                </h3>
                <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
                    Sự thu hẹp quy mô gia đình Việt Nam không chỉ là một xu hướng tự nhiên mà còn là kết quả trực tiếp của các chính sách xã hội cấp nhà nước. Bắt đầu từ những năm 1970 và 1980, một "Cuộc vận động sinh đẻ có kế hoạch" đã được triển khai sâu rộng.
                </p>
                <p className="mt-4 text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
                    Chiến dịch này đã <span className="text-violet-300 font-semibold">"tuyên truyền, phổ biến và áp dụng rộng rãi các phương tiện và biện pháp kỹ thuật tránh thai"</span>, làm thay đổi căn bản tư duy "càng đông con càng tốt" và "nhất thiết phải có con trai" của gia đình truyền thống.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-700 pt-8">
                    <div className="text-center">
                        <OldCampaignIcon />
                        <h4 className="text-lg font-semibold text-white mb-2">Giai đoạn 1980s - 2010s</h4>
                        <div className="bg-slate-900/50 p-4 rounded-md border border-slate-600">
                            <p className="text-slate-400 text-sm mb-2 italic">Thông điệp:</p>
                            <p className="font-semibold text-violet-300">"Dù gái hay trai, chỉ nên có từ 1 đến 2 con".</p>
                        </div>
                        <div className="mt-4 text-left">
                            <h5 className="font-semibold text-slate-200">Tác động:</h5>
                            <p className="text-slate-400 text-sm leading-relaxed">Giảm mức sinh, "giảm số con mong muốn", trực tiếp dẫn đến mô hình gia đình hạt nhân 2 thế hệ.</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <ModernCampaignIcon />
                        <h4 className="text-lg font-semibold text-white mb-2">Giai đoạn 2020s - Nay</h4>
                        <div className="bg-slate-900/50 p-4 rounded-md border border-slate-600">
                            <p className="text-slate-400 text-sm mb-2 italic">Thông điệp:</p>
                            <p className="font-semibold text-sky-300">"Mỗi cặp vợ chồng nên sinh đủ hai con".</p>
                        </div>
                        <div className="mt-4 text-left">
                            <h5 className="font-semibold text-slate-200">Lý do:</h5>
                            <p className="text-slate-400 text-sm leading-relaxed">Do dân số Việt Nam bước vào giai đoạn già hóa, thông điệp mới được đưa ra để "đảm bảo lợi ích của gia đình và sự phát triển bền vững của xã hội".</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 border-t border-slate-700 pt-6">
                    <p className="text-slate-300 italic text-center">
                        Các chiến dịch kế hoạch hóa dân số đã tác động trực tiếp đến chức năng "tái sản xuất ra con người" của gia đình, biến nó từ một quyết định tự nhiên, truyền thống thành một lựa chọn xã hội có kế hoạch và được điều chỉnh bởi chính sách.
                    </p>
                </div>
            </div>

            {/* Card về Chức năng */}
            <AnalysisCard {...functionCardData} />
            
            {/* Card về Mối quan hệ */}
            <AnalysisCard {...relationCardData} />

            {/* Hình ảnh minh họa cho Mối quan hệ */}
            <figure className="group text-center bg-slate-800/40 p-3 rounded-lg border border-slate-700">
                <div className="overflow-hidden rounded aspect-video">
                    <img 
                        src={relationshipConflictImageUrl} 
                        alt="Mâu thuẫn thế hệ trong gia đình hiện đại" 
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                </div>
                <figcaption className="mt-3 text-sm text-slate-400 italic">
                    Khoảng cách thế hệ trong thời đại số: Cùng một không gian, nhưng mỗi người một thế giới.
                </figcaption>
            </figure>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;