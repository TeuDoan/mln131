import React from 'react';

interface FooterProps {
  onShowAppendix: () => void;
  onShowQuiz: () => void;
  isQuiz?: boolean;
}

const Footer: React.FC<FooterProps> = ({ onShowAppendix, onShowQuiz, isQuiz = false }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 mt-16 sm:mt-20 lg:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Nguồn tham khảo */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Nguồn tham khảo</h3>
            <p className="mt-4 text-sm text-slate-400">
              Giáo trình Chủ nghĩa Xã hội Khoa học (Không chuyên), Chương 7.
            </p>
          </div>
          
          {/* Người thực hiện */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Người thực hiện</h3>
            <p className="mt-4 text-sm text-slate-400">
              Nhóm 7 - Lớp IA1701
            </p>
          </div>
          
          {/* Dự án/Môn học */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Dự án/Môn học</h3>
            <p className="mt-4 text-sm text-slate-400">
              Bài tập môn MLN131
            </p>
          </div>

          {/* Ghi chú */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Ghi chú</h3>
            <p className="mt-4 text-sm text-slate-400 space-y-2">
               <button onClick={onShowAppendix} className="block hover:text-sky-400 hover:underline transition-colors">
                Phụ lục sử dụng AI
               </button>
               <button onClick={onShowQuiz} className="block hover:text-sky-400 hover:underline transition-colors">
                {isQuiz ? 'Quay lại trang chính' : 'Quiz Gia Đình Việt 4.0'}
               </button>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700/50 pt-8 text-center">
           <p className="text-sm text-slate-500">
             &copy; {new Date().getFullYear()} Gia Đình Việt 4.0.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
