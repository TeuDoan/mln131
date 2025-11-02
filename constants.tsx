import React from 'react';
import type { CardData, GalleryImage } from './types';

const iconClass = "h-10 w-10";

export const cardData: CardData[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Giá Trị Truyền Thống",
    description: "Nền tảng của sự gắn kết: Lòng hiếu thảo, sự tôn trọng người lớn tuổi, và tình làng nghĩa xóm vẫn là những giá trị cốt lõi được gìn giữ và trân trọng qua nhiều thế hệ.",
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    title: "Tác Động Hiện Đại",
    description: "Sự trỗi dậy của chủ nghĩa cá nhân, vai trò bình đẳng giới, và sự bùng nổ công nghệ đang định hình lại cấu trúc, cách giao tiếp và mục tiêu của các thành viên trong gia đình.",
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1014.12 11.88a3 3 0 00-4.242 4.242z" />
        </svg>
    ),
    title: "Mâu Thuẫn & Thách Thức",
    description: "Khoảng cách thế hệ ngày càng lớn, áp lực cân bằng giữa công việc và cuộc sống, và những khác biệt trong quan điểm sống tạo ra những xung đột cần được thấu hiểu và hòa giải.",
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18" />
        </svg>
    ),
    title: "Cơ Hội & Thích Ứng",
    description: "Công nghệ giúp kết nối các thành viên xa cách. Tư duy cởi mở hơn tạo điều kiện cho sự phát triển cá nhân, hướng tới một mô hình gia đình linh hoạt và bền vững hơn.",
  },
];

export const galleryData: GalleryImage[] = [
    {
        src: 'https://images.unsplash.com/photo-1643921104838-a35970a04a62?q=80&w=1280&auto=format&fit=crop',
        alt: 'Gia đình sum vầy ngày Tết Nguyên Đán',
        description: 'Tết Nguyên Đán, khoảnh khắc sum vầy thiêng liêng, nơi các thế hệ cùng nhau chia sẻ niềm vui và gìn giữ những phong tục truyền thống tốt đẹp.'
    },
    {
        src: 'https://images.unsplash.com/photo-1594212699903-ec8a3d58a8a6?q=80&w=1280&auto=format&fit=crop',
        alt: 'Bữa cơm gia đình ấm cúng',
        description: 'Bữa cơm gia đình, không chỉ là nơi gắn kết tình thân mà còn là không gian ấm cúng để mọi người chia sẻ câu chuyện và thể hiện sự quan tâm.'
    },
    {
        src: 'https://images.unsplash.com/photo-1599952261073-501160353155?q=80&w=1280&auto=format&fit=crop',
        alt: 'Bà và cháu gái đang học bài',
        description: 'Sự trao truyền giá trị giữa các thế hệ. Ông bà không chỉ chăm sóc mà còn dạy dỗ con cháu những bài học đầu đời quý giá.'
    },
    {
        src: 'https://images.unsplash.com/photo-1530041539828-114de669390e?q=80&w=1280&auto=format&fit=crop',
        alt: 'Gia đình hiện đại sử dụng máy tính bảng',
        description: 'Gia đình trong thời đại số. Công nghệ vừa là công cụ kết nối, giải trí, vừa đặt ra thách thức về việc cân bằng thời gian và tương tác trực tiếp.'
    },
    {
        src: 'https://images.unsplash.com/photo-1597157639167-2ea211328055?q=80&w=1280&auto=format&fit=crop',
        alt: 'Cô dâu và chú rể trong ngày cưới',
        description: 'Đám cưới là sự kiện trọng đại, đánh dấu sự khởi đầu của một gia đình mới, là sự giao thoa giữa các giá trị văn hóa truyền thống và hiện đại.'
    },
    {
        src: 'https://images.unsplash.com/photo-1620192135332-936e3a47ed3a?q=80&w=1280&auto=format&fit=crop',
        alt: 'Gia đình nông dân đang làm việc trên đồng',
        description: 'Cùng nhau lao động sản xuất. Hình ảnh phản ánh sự đồng lòng, chia sẻ gánh nặng kinh tế và xây dựng nền tảng vững chắc cho gia đình.'
    },
    {
        src: 'https://images.unsplash.com/photo-1604928141068-a08a26b6a4a8?q=80&w=1280&auto=format&fit=crop',
        alt: 'Cha mẹ trẻ đang bế em bé sơ sinh',
        description: 'Chào đón thành viên mới. Khoảnh khắc đánh dấu sự chuyển giao và tiếp nối, mang lại niềm hạnh phúc và trách nhiệm lớn lao cho các cặp vợ chồng trẻ.'
    }
];
