import React from 'react'
import LeftArrowButton from '../UI/LeftArrowButton';
import RightArrowButton from '../UI/RightArrowButton';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import recentlyViewed from '../../constants/recently-viewed';
import RecentlyViewedProduct from '../RecentlyViewedProduct';
function RecentlyViewed() {
  return (
    <div className='m-section flex flex-col'>
        <div className='flex justify-between'>
              <h3 className='text-xl font-medium'>Recently viewed</h3>
              <div className='flex gap-2'>
                  <LeftArrowButton className={`rv-left-arrow-button`}/>
                  <RightArrowButton className={`rv-right-arrow-button`} />
              </div>
        </div>

        <Swiper 
            modules={[Navigation]}
            navigation={{
                prevEl: '.rv-left-arrow-button',
                nextEl: '.rv-right-arrow-button'
            }}
            slidesPerView={5}
        >
            {recentlyViewed.map((product, index) => {
                <SwiperSlide key={index}>
                    <RecentlyViewedProduct name={product.title} price={product.price} stars={product.stars} ratings={product.ratings}/>
                </SwiperSlide>
            })}
        </Swiper>    
    </div>
  )
}

export default RecentlyViewed;