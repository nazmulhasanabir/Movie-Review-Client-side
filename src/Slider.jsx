import image1 from "../src/assets/Poster image/125b8d97e03823163e879432d07ad395.jpg";
import image2 from "../src/assets/Poster image/23ff07b3be01046c20fdced300040d9b.jpg";
import image3 from "../src/assets/Poster image/The Dark Knight.jpg";
import image4 from "../src/assets/Poster image/664fb36db5d95bb35a826328038d98c8.jpg";
import image5 from "../src/assets/Poster image/8cd9f2bdece7ada794937fd9cd960c6a.jpg";
import image6 from "../src/assets/Poster image/e85a31925858acec5fc35708433501e5.jpg";
// Import Swiper React components

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <div className="p-20  rounded-xl mb-6 dark:bg-gradient-to-br dark:from-purple-900 dark:via-white dark:to-purple-900 dark:text-black">
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
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
