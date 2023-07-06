import React from 'react'
import recommendedProducts from '../../constants/recommended-products';
import RecommendedProduct from '../RecommendedProduct';
import LeftArrowButton from '../UI/LeftArrowButton';
import RightArrowButton from '../UI/RightArrowButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
function Recommended() {
  return (
    <div className='flex flex-col px-section py-4 gap-4'>
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-xl font-medium'>Recommended</h1>
            <a href='#' className='text-sm text-darkBlue'>View all</a>
        </div>
        <div className='flex gap-1 items-center justify-center'>
        <LeftArrowButton className={`rd-left-arrow-button`}/>
          <Swiper 
            modules={[Navigation]}
            navigation={{
              enabled: true, 
              prevEl: '.rd-left-arrow-button',
              nextEl: '.rd-right-arrow-button',
            }}
            loop={true}
            slidesPerView={5}
            spaceBetween={10}
          >
            {recommendedProducts.map(product => {
              return <SwiperSlide key={product.id}> <RecommendedProduct  img={product.img} title={product.name} rating={product.rating} originalPrice={product.originalPrice} discountedPrice={product.discountedPrice} discountBanner={product.discountBanner} /></SwiperSlide>;
            })}
          </Swiper>
        <RightArrowButton className={`rd-right-arrow-button`}/>
        </div>
        
    </div>
  )
}

export default Recommended;