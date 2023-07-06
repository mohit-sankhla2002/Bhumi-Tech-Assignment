import {register} from 'swiper/element/bundle';
import slide from '../../assets/slide.png';
import 'swiper/css'
const Hero = () => {
    register();
    return <swiper-container slides-per-view="1" loop="true" autoplay="true">
        <swiper-slide><img src={slide} /></swiper-slide>
        <swiper-slide><div className="h-full bg-green-600">Slide 2</div></swiper-slide>
        <swiper-slide><div className="h-full bg-green-600">Slide 3</div></swiper-slide>
        <swiper-slide><div className="h-full bg-green-600">Slide 4</div></swiper-slide>
        <swiper-slide><div className="h-full bg-green-600">Slide 5</div></swiper-slide>
    </swiper-container>
}

export default Hero;