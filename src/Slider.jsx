import image1 from "../src/assets/Poster image/125b8d97e03823163e879432d07ad395.jpg";
import image2 from "../src/assets/Poster image/23ff07b3be01046c20fdced300040d9b.jpg";
import image3 from "../src/assets/Poster image/The Dark Knight.jpg";
import image4 from "../src/assets/Poster image/664fb36db5d95bb35a826328038d98c8.jpg";
import image5 from "../src/assets/Poster image/8cd9f2bdece7ada794937fd9cd960c6a.jpg";
import image6 from "../src/assets/Poster image/e85a31925858acec5fc35708433501e5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="p-20  bg-gray-200  dark:bg-gradient-to-br from-purple-900 via-black to-black text-white">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
