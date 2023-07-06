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
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'1'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
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
            delay={3000}
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