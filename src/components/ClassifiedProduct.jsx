import React from 'react'
import lcn from '../assets/location.svg';
function ClassifiedProduct({img, title, location, price}) {
  return (
    <div className='rounded-[30px] flex flex-col bg-white shadow-sm w-[250px] h-[350px]'>
      <img src={img} className='w-full h-full'/>
      <div className='flex flex-col px-5 py-3'>
        <p className='min-h-[70px] text-sm'>{title}</p>
        <div className='flex justify-between'>
          <p className='text-lightBlue font-semibold'>${price}</p>
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