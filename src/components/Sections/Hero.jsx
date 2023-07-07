import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import HeroSlide from '../HeroSlide';
import { EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper/modules';
const Hero = () => {
    return (
        <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 200,
                slideShadows: false,
            }}
            pagination={{
                enabled: true,
                clickable: true
            }}
            loop={"true"}
            autoplay={{
                enabled: true, 
                delay: 5000,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide><HeroSlide /></SwiperSlide>
            <SwiperSlide><HeroSlide /></SwiperSlide>
            <SwiperSlide><HeroSlide /></SwiperSlide>
            <SwiperSlide><HeroSlide /></SwiperSlide>
        </Swiper>

    );
}

export default Hero;