import React from 'react'
import slide from '../assets/slide.png'
function HeroSlide() {
  return (
    <div className='mx-section my-10 relative h-[60vh] rounded-[40px]' id='hero-slide'>
      <div className='px-[80px] flex items-center justify-end w-full h-full' >
        <h1 className='text-4xl font-extralight leading-snug text-white max-w-[38vw]'>From students to senior citizens this web portal of <span className='font-bold'> "Products and Classifieds” </span>provides it all</h1>
      </div>
    </div>
  )
}

export default HeroSlide;