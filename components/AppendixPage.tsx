import React from 'react';

interface AppendixPageProps {
  onBack: () => void;
}

const AppendixPage: React.FC<AppendixPageProps> = ({ onBack }) => {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
                <button 
                    onClick={onBack}
                    className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors mb-8 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Quay lại trang chính</span>
                </button>

                <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
                    Phụ Lục: Ghi Chú Về Việc Sử Dụng Trí Tuệ Nhân Tạo (AI)
                </h1>
                <p className="text-center text-slate-400 mb-12">
                    Cam kết về tính minh bạch và liêm chính học thuật trong quá trình thực hiện bài tập.
                </p>

                {/* Table */}
                <div className="overflow-x-auto bg-slate-800/50 rounded-lg border border-slate-700">
                    <table className="w-full text-sm text-left text-slate-300">
                        <thead className="text-xs text-slate-200 uppercase bg-slate-800">
                            <tr>
                                <th scope="col" className="px-6 py-3">Công cụ</th>
                                <th scope="col" className="px-6 py-3">Mục đích</th>
                                <th scope="col" className="px-6 py-3">Kết quả thô (AI Output)</th>
                                <th scope="col" className="px-6 py-3">Phần sinh viên chỉnh sửa/sáng tạo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-700">
                                <td className="px-6 py-4 font-semibold">Gemini</td>
                                <td className="px-6 py-4">Hỗ trợ tìm kiếm ý tưởng, tóm tắt thông tin từ giáo trình, đề xuất cấu trúc, tạo mã nguồn cho giao diện (UI) và biểu đồ.</td>
                                <td className="px-6 py-4">Cung cấp các đoạn văn bản tóm tắt, dàn ý ban đầu, mã boilerplate cho HTML/CSS/React và SVG.</td>
                                <td className="px-6 py-4">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>Nội dung:</strong> Biên tập lại toàn bộ văn bản để đảm bảo văn phong học thuật, chính xác. Đối chiếu mọi thông tin với giáo trình.</li>
                                        <li><strong>Cấu trúc:</strong> Sắp xếp lại bố cục, thêm/bớt luận điểm để tăng tính logic.</li>
                                        <li><strong>Kỹ thuật:</strong> Tinh chỉnh mã nguồn, áp dụng kiến thức UI/UX để cải thiện trải nghiệm, sửa lỗi và tối ưu hóa.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 space-y-8 text-slate-300 leading-relaxed text-justify">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">1. Tinh thần Trách nhiệm</h2>
                        <p>
                            Mọi thông tin do AI tạo ra đều được kiểm chứng cẩn thận với nguồn tham khảo chính là <strong className="text-emerald-400">Giáo trình Chủ nghĩa Xã hội Khoa học (Không chuyên)</strong> và các văn bản, nghị quyết chính thống có liên quan. Nhóm chịu trách nhiệm hoàn toàn về tính chính xác và phù hợp của nội dung cuối cùng.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">2. Vai trò Sáng tạo</h2>
                        <p>
                            AI chỉ đóng vai trò là một công cụ hỗ trợ, không thay thế tư duy sáng tạo và phân tích của sinh viên. Các sản phẩm sáng tạo như thiết kế giao diện, luồng trải nghiệm người dùng, biểu đồ trực quan hóa dữ liệu và toàn bộ nội dung phân tích cuối cùng đều là kết quả của quá trình làm việc, thảo luận và biên soạn của nhóm.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">3. Cam kết về Liêm chính Học thuật</h2>
                        <p>Nhóm cam kết tuân thủ các nguyên tắc liêm chính học thuật, được thể hiện qua các dấu hiệu cụ thể sau:</p>
                        <ul className="list-disc list-inside space-y-3 mt-4 pl-4">
                            <li>
                                <strong className="text-sky-400">Cam kết bằng văn bản:</strong> Phụ lục này là minh chứng cho cam kết của nhóm về việc sử dụng AI một cách minh bạch, có trách nhiệm và không lạm dụng AI để làm thay hoàn toàn bài tập.
                            </li>
                            <li>
                                <strong className="text-sky-400">Phân định rõ ràng:</strong> Bảng trên đã phân định rõ giữa kết quả thô do AI cung cấp và phần giá trị gia tăng (chỉnh sửa, biên soạn, sáng tạo) do sinh viên thực hiện.
                            </li>
                            <li>
                                <strong className="text-sky-400">Đối chiếu nguồn:</strong> Mọi luận điểm, số liệu và trích dẫn trong bài đều được đối chiếu và xác thực với các nguồn học thuật đáng tin cậy, đảm bảo tính chính xác và liêm chính.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default AppendixPage;
