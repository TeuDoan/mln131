import React, { useState, useEffect } from 'react';
import { galleryData } from '../constants';
import type { GalleryImage } from '../types';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900/70">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            6. Khoảnh Khắc Gia Đình Việt
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Những hình ảnh đời thường ghi lại sự đan xen giữa giá trị truyền thống và nhịp sống hiện đại trong mỗi tổ ấm.
          </p>
        </div>

        <div className="relative">
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800/50 snap-x snap-mandatory">
            <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8 snap-center"></div>
            {galleryData.map((image, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-64 h-96 sm:w-72 lg:w-80 rounded-lg overflow-hidden cursor-pointer snap-center"
                onClick={() => setSelectedImage(image)}
                role="button"
                aria-label={`View image: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-white font-semibold text-sm drop-shadow-md leading-snug">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8 snap-center"></div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
        >
          <div
            className="relative bg-slate-800/80 border border-slate-700 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-grow flex items-center justify-center p-4">
               <img
                  src={selectedImage.src.replace('w=1280', 'w=1920')}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
            </div>
            <div className="bg-slate-900/60 p-4 sm:p-6 border-t border-slate-700">
              <p id="gallery-modal-title" className="text-slate-300 leading-relaxed text-center">
                {selectedImage.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors p-2 rounded-full bg-slate-900/50 hover:bg-slate-800/70"
              aria-label="Close image viewer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #475569 #1e293b80;
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1e293b80;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #475569;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #64748b;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
