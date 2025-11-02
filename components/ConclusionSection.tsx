import React from 'react';

const ConclusionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900/70 border-t border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 mb-4">
            Kết Luận: Xây Dựng Gia Đình Hạnh Phúc
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8">
            Hướng Tới Gia Đình Việt Nam: Ấm No, Tiến Bộ, Hạnh Phúc
          </h3>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed text-justify md:text-center">
            <p>
              Tổng kết lại, gia đình Việt Nam đang trong một cuộc <span className="font-semibold text-sky-400">"biến đổi tương đối toàn diện"</span>. Đây là một quá trình tất yếu, vừa mang đến những cơ hội phát triển, vừa đặt ra không ít thách thức.
            </p>
            <p>
              Phương hướng xây dựng gia đình trong bối cảnh mới là phải <span className="font-semibold text-emerald-400">"kế thừa và phát huy những giá trị văn hóa truyền thống tốt đẹp"</span> đồng thời <span className="font-semibold text-emerald-400">"kết hợp với những giá trị tiên tiến của gia đình hiện đại"</span>.
            </p>
            <p>
              Mục tiêu cuối cùng là làm cho gia đình thực sự là <span className="font-semibold text-sky-400">"tế bào lành mạnh của xã hội, là tổ ấm của mỗi người"</span>, nơi nuôi dưỡng nhân cách và là điểm tựa vững chắc cho mỗi cá nhân.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
