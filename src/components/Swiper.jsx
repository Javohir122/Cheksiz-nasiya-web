import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const SwiperComponent = () => {
  return (
    <Swiper
    style={{height:"400px"}}
      modules={[Autoplay]}

      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true} 
    >
      <SwiperSlide style={{width: "100", padding: "0", margin: "0", }}>
        <div>
            <img src="https://mavzular.uz/wp-content/uploads/2024/10/bu-ham-Rasm-chizish-qizlar-uchun.webp" alt="r" width={120} />
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
