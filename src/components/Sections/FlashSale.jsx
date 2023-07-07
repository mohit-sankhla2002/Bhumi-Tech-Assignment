import React from 'react'
import flashProducts from '../../constants/flash-product'
import FlashProduct from '../FlashProduct';
import Countdown from '../Countdown';
function FlashSale() {
  const targetDate = new Date('2023-07-31T23:59:59')
  return (
    <div className='flash-sale bg-darkBlue m-section shadow-bs2 flex items-center gap-4 border-2 border-blue-700'>
        <div className='flex flex-col max-w-[350px] gap-6 justify-between'>
            <h1 className='text-white text-5xl font-semibold'>Flash Sale</h1>
              <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <Countdown className='text-white text-5xl font-semibold' date={targetDate} />
        </div>

        <div className='flex flex-col'>
              <div className='grid grid-cols-2 gap-4'>
                  {flashProducts.map((product, index) => (<FlashProduct key={index} img={product.img} title={product.title} price={product.price} totalItem={product.totalItems} itemLeft={product.itemsLeft} />))}
              </div>
              <div className='flex mt-[50px] justify-between'>
                <p className='pagination'></p>
                <p className='text-white font-semibold'>View More</p>
              </div>
        </div>
        

    </div>
  )
}

export default FlashSale;