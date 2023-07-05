import {register} from 'swiper/element/bundle';
import slide from '../../assets/slide.png';
import 'swiper/css'
const Hero = () => {
    register();
    return <swiper-container slides-per-view="1" loop="true" speed="300">
        <swiper-slide><img src={slide} /></swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
    </swiper-container>
}

export default Hero;