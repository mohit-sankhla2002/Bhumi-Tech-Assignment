import React from 'react'
import LeftArrowButton from '../UI/LeftArrowButton';
import rightArrow from '../../assets/rightArrow.svg';
import ButtonFilled from '../UI/ButtonFilled';
import classifiedProducts from '../../constants/classified-products';
import ClassifiedProduct from '../ClassifiedProduct';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules'
import RightArrowButton from '../UI/RightArrowButton';
function ClassifiedProducts() {
  return (
    <div className='bg-lightGray px-section py-10 flex items-center gap-10'>
        <div className='flex flex-col w-1/5 gap-10 items-center'>
            {/* Title */}
              <h1 className='text-center text-2xl font-semibold tracking-wide'>Classified <br />Products on <br /> the week</h1>
            {/* Navigation Buttons */}
                <div className='flex justify-center gap-10'>
          <LeftArrowButton className={`cp-swiper-button-prev`}/>
          <RightArrowButton className={`cp-swiper-button-next`} />
                </div>
            {/* Button */}
                <ButtonFilled className='flex'>Explore <img src={rightArrow} className='invert w-[15px]'/></ButtonFilled>
        </div>

      <Swiper slidesPerView={4} spaceBetween={50} modules={[Navigation]} navigation={{
        enabled: true,
        nextEl: '.cp-swiper-button-next',
        prevEl: '.cp-swiper-button-prev'
      }}
      >
        {classifiedProducts.map(product => <SwiperSlide key={product.id}><ClassifiedProduct img={product.img} title={product.name} price={product.price} location={product.location} /></SwiperSlide>)}
        </Swiper>
    </div>
  )
}

export default ClassifiedProducts;