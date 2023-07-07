import React from 'react'
import rightArrow from '../../assets/rightArrow.svg'
function InfoCards() {
  return (
    <div className='mx-section grid grid-cols-2 gap-10'>
        <div id='explore-classifieds' className='info-card'>
            <h1 className='text-4xl text-white font-extralight'>Explore <br /> <span className='font-semibold'>Classifieds</span></h1>
            <div className='flex justify-between items-end'>
                <h3 className='font-light text-2xl text-white'>Over 5000+ Products</h3>
                <button className='bg-transparent border border-white rounded-full p-2'><img src={rightArrow} className='invert' alt="" /></button>
            </div>
        </div>
        <div id='add-classifieds' className='info-card'>
              <h1 className='text-4xl text-white font-extralight'>Add <br /> <span className='font-semibold'>Classifieds</span></h1>
              <div className='flex justify-between items-end'>
                  <h3 className='font-light text-2xl text-white'>Ads, Event Ads <br /> Service Requests Etc</h3>
                  <button className='bg-transparent border border-white rounded-full p-2'><img src={rightArrow} className='invert' alt="" /></button>
              </div>
        </div>
        <div id='explore-products' className='info-card'>
              <h1 className='text-4xl text-white font-extralight'>Explore <br /> <span className='font-semibold'>Products</span></h1>
              <div className='flex justify-between items-end'>
                  <h3 className='font-light text-2xl text-white'>Over 25000 + Products</h3>
                  <button className='bg-transparent border border-white rounded-full p-2'><img src={rightArrow} className='invert' alt="" /></button>
              </div>
        </div>
        <div id='partner-with-us' className='info-card'>
              <h1 className='text-4xl text-white font-extralight'>Partner <br /> <span className='font-semibold'>With Us</span></h1>
              <div className='flex justify-between items-end'>
                  <h3 className='font-light text-2xl text-white'>Sell Your Products</h3>
                  <button className='bg-transparent border border-white rounded-full p-2'><img src={rightArrow} className='invert' alt="" /></button>
              </div>
        </div>
    </div>
  )
}

export default InfoCards;