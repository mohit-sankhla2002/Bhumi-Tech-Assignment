import React from 'react'
import lcn from '../assets/location.svg';
function ClassifiedProduct({img, title, location, price}) {
  return (
    <div className='rounded-[30px] flex flex-col bg-white'>
      <img src={img} className='w-full'/>
      <div className='flex flex-col p-3'>
        <p className='min-h-[70px]'>{title}</p>
        <div className='flex justify-between'>
          <p>${price}</p>
          <div className='flex gap-1 items-center'>
            <img src={lcn} className='invert-[30%] w-3' />
            <p className='text-gray-500 text-sm'>{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassifiedProduct;