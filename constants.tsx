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
        src: 'https://banhtombaloc.vn/medias/2025/01/tet-nguyen-dan.png',
        alt: 'Gia đình sum vầy ngày Tết Nguyên Đán',
        description: 'Tết Nguyên Đán là thời khắc thiêng liêng mà mọi thành viên trong gia đình quây quần bên nhau, cùng chia sẻ niềm vui, ôn lại kỷ niệm và gìn giữ những phong tục truyền thống tốt đẹp. Đây cũng là dịp để con cháu bày tỏ lòng biết ơn, ông bà trao truyền những giá trị tinh thần, tạo nên sợi dây gắn kết bền chặt giữa các thế hệ.'
    },
    {
        src: 'https://file3.qdnd.vn/data/images/0/2023/06/28/vuhuyen/com-gia-dinh.jpg?dpi=150&quality=100&w=870',
        alt: 'Bữa cơm gia đình ấm cúng',
        description: 'Bữa cơm gia đình không chỉ đơn thuần là nơi mọi người cùng thưởng thức món ăn, mà còn là không gian ấm cúng để các thành viên chia sẻ câu chuyện, trao nhau những lời động viên, chăm sóc nhau bằng tình cảm chân thành và sự quan tâm hàng ngày. Nó thể hiện sự gắn kết và tình thân sâu sắc trong mỗi gia đình.'
    },
    {
        src: 'https://images2.thanhnien.vn/528068263637045248/2025/10/19/photo-1760886909003-1760886910103552078849.png',
        alt: 'Bà và cháu gái đang học tiếng đức vui vẽ',
        description: 'Sự trao truyền kiến thức và giá trị sống giữa các thế hệ luôn là điều quý giá. Những khoảnh khắc ông bà hướng dẫn, chăm sóc và dạy dỗ con cháu không chỉ giúp trẻ em học hỏi những bài học đầu đời mà còn hình thành nên những giá trị đạo đức, sự kiên nhẫn và lòng biết ơn, góp phần vun đắp tương lai cho thế hệ sau.'
    },
    {
        src: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2014_7_25_201407251418271180_tablet1.jpg',
        alt: 'Gia đình hiện đại sử dụng máy tính bảng',
        description: 'Trong thời đại công nghệ số, gia đình hiện đại thường sử dụng các thiết bị thông minh vừa để giải trí, vừa để kết nối thông tin. Tuy nhiên, công nghệ cũng đặt ra thách thức về việc cân bằng thời gian giữa màn hình và những tương tác trực tiếp, nhắc nhở các thành viên cần duy trì sự gần gũi và chia sẻ tình cảm hàng ngày để giữ gìn sự ấm áp gia đình.'
    },
    {
        src: 'https://thanhnien.mediacdn.vn/Uploaded/vuphuong/2022_08_02/ac8b7ab22f4bed15b45a-9078.jpg',
        alt: 'Cô dâu và chú rể trong ngày cưới',
        description: 'Đám cưới là một trong những sự kiện trọng đại nhất của đời người, đánh dấu sự khởi đầu của một gia đình mới và sự giao hòa giữa truyền thống và hiện đại. Đây là thời khắc mà tình yêu được chứng minh, các giá trị văn hóa được trân trọng, và mọi người cùng chúc phúc, mong cho gia đình trẻ luôn hạnh phúc, vững bền và tràn đầy niềm vui.'
    },
    {
        src: 'https://i.vnbusiness.vn/2019/09/25/du-lich-1801-1569410452_1200x0.jpg',
        alt: 'Gia đình nông dân đang làm việc trên đồng',
        description: 'Hình ảnh gia đình cùng lao động sản xuất trên đồng ruộng thể hiện sự đồng lòng, chia sẻ gánh nặng kinh tế và xây dựng nền tảng vững chắc cho cuộc sống. Những khoảnh khắc giản dị này không chỉ là công việc mà còn là dịp để mỗi thành viên học cách hỗ trợ nhau, rèn luyện sự kiên nhẫn và cảm nhận giá trị của tình thân trong đời sống hàng ngày.'
    },
    {
        src: 'https://media.phunutoday.vn/files/upload_images/2015/07/04/chu-y-khi-tham-be-so-sinh1.jpg',
        alt: 'Cha mẹ trẻ đang bế em bé sơ sinh',
        description: 'Khoảnh khắc chào đón thành viên mới vào gia đình là niềm hạnh phúc vô bờ của các bậc cha mẹ. Nó đánh dấu sự chuyển giao và tiếp nối, mang lại trách nhiệm lớn lao và những trải nghiệm mới mẻ. Trong những ngày đầu đời của trẻ, tình yêu thương, sự chăm sóc tỉ mỉ và những bài học đầu đời mà cha mẹ truyền đạt chính là nền tảng quan trọng cho sự phát triển về cả thể chất lẫn tinh thần của con.'
    },
    {
        src: 'https://free.vector6.com/wp-content/uploads/2021/04/214183-Tranh-Co-Dong-Vector-Corel.jpg',
        alt: 'Tranh cổ động về chủ đề gia đình',
        description: 'Tranh cổ động là một hình thức truyền thông mạnh mẽ, thường được sử dụng để truyền tải các thông điệp của nhà nước về tầm quan trọng của gia đình. Những hình ảnh này nhấn mạnh việc xây dựng "gia đình văn hóa", ấm no, hạnh phúc, và coi đây là nền tảng cho sự phát triển bền vững của xã hội, thể hiện sự quan tâm của nhà nước đến giá trị cốt lõi.'
    },
    {
        src: 'https://stphunusongchudong.suckhoegiadinh.com.vn/staticFile/cuocthi/cac-bai-tho-hay-ve-ke-hoach-hoa-gia-dinh-3_4733851.png',
        alt: 'Tranh cổ động về chủ đề gia đình',
        description: 'Tranh cổ động là một hình thức truyền thông mạnh mẽ, thường được sử dụng để truyền tải các thông điệp của nhà nước về tầm quan trọng của gia đình. Những hình ảnh này nhấn mạnh việc xây dựng "gia đình văn hóa", ấm no, hạnh phúc, và coi đây là nền tảng cho sự phát triển bền vững của xã hội, thể hiện sự quan tâm của nhà nước đến giá trị cốt lõi.'
    },
    {
        src: 'https://vnanet.vn/Data/Articles/2019/08/01/4000264/vna_potal_thanh_pho_ho_chi_minh_tong_ket_va_trao_giai_cuoc_thi_sang_tac_tranh_co_dong_chu_de_%E2%80%9Cgia_dinh_no_am_tien_bo_hanh_phuc%E2%80%9D__161309044_stand.jpg',
        alt: 'Tranh cổ động về chủ đề gia đình',
        description: 'Tranh cổ động là một hình thức truyền thông mạnh mẽ, thường được sử dụng để truyền tải các thông điệp của nhà nước về tầm quan trọng của gia đình. Những hình ảnh này nhấn mạnh việc xây dựng "gia đình văn hóa", ấm no, hạnh phúc, và coi đây là nền tảng cho sự phát triển bền vững của xã hội, thể hiện sự quan tâm của nhà nước đến giá trị cốt lõi.'
    },
    {
        src: 'https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2023/6/18/base64-16870776951411956868612.png',
        alt: 'Một gia đình tham gia ngày hội gia đình',
        description: 'Các hoạt động cộng đồng do chính quyền và đoàn thể tổ chức, như "Ngày hội Gia đình" hay các giải chạy, tạo không gian để các gia đình cùng nhau tham gia. Những sự kiện này không chỉ tăng cường sức khỏe, sự gắn kết mà còn là nỗ lực của xã hội nhằm củng cố tình thân và tạo ra môi trường sống tích cực cho mọi thành viên.'
    }
]
;