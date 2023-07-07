import React from 'react'
import LeftArrowButton from '../UI/LeftArrowButton';
import RightArrowButton from '../UI/RightArrowButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import hotSale from '../../constants/hot-sale';
import HotSaleProduct from '../HotSaleProduct';
function HotSale() {
    return (
        <div className='flex flex-col px-section my-14 gap-4'>
            <h1 className='text-xl font-medium'>Hot Sale!</h1>
            <div className='flex gap-1 py-10 items-center justify-center'>
                <LeftArrowButton className={`hs-left-arrow-button`} />
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        enabled: true,
                        prevEl: '.hs-left-arrow-button',
                        nextEl: '.hs-right-arrow-button',
                    }}
                    slidesPerView={5}
                    spaceBetween={10}
                >
                    {hotSale.map((product, index) => {
                        return <SwiperSlide key={index}> <HotSaleProduct id={product.id} img={product.img} title={product.name} rating={product.rating} originalPrice={product.originalPrice} discountedPrice={product.discountedPrice} discountBanner={product.discountBanner} /></SwiperSlide>;
                    })}
                </Swiper>
                <RightArrowButton className={`hs-right-arrow-button`} />
            </div>
        </div>
    )
}

export default HotSale;