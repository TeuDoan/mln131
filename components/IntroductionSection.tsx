import React from 'react';

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 border-y border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-6">
            1. Bức Tranh Toàn Cảnh
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-justify">
            Gia đình Việt Nam ngày nay đang trong một giai đoạn được xem là "gia đình quá độ", đánh dấu bước chuyển mình căn bản từ xã hội nông nghiệp cổ truyền sang xã hội công nghiệp hiện đại. Dưới tác động mạnh mẽ của kinh tế thị trường, quá trình công nghiệp hóa, hiện đại hóa và xu thế toàn cầu hóa sâu rộng, gia đình đang trải qua một "sự biến đổi tương đối toàn diện"  trên mọi phương diện. Chính sự biến đổi này đang tạo nên một bức tranh đa dạng, đan xen phức tạp giữa các giá trị truyền thống và những yếu tố hiện đại của thời đại 4.0.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
