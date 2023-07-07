import React from 'react'
import letter from '../../assets/letter.svg'
import dotSquare from '../../assets/dotSquare.svg'
function Newsletter() {
  return (
    <div className='grid grid-cols-6 bg-darkBlue px-section py-20 items-center'>
        <img src={letter} className='col-span-1'/> 
        <div className='flex flex-col items-start col-span-3 ml-5 mr-20 gap-10'>
            <div className='relative'>
                <h1 className='text-3xl text-white font-medium'>Sign Up for Newsletter </h1>
                  <img src={dotSquare} className='absolute right-[-20px] top-[-20px] w-[40px]' />
            </div>
            <p className='text-white text-sm text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='flex bg-white col-span-2 p-2 items-start relative rounded-[12px] z-3'>
            <img src={dotSquare} className='absolute right-[-20px] bottom-[-20px] w-[40px]' />
            <div className='flex w-full z-10'>
                  <input className='border-none outline-none w-full placeholder:text-sm px-2' placeholder='Enter your email here'/>
                <button className='bg-gray-600 px-5 py-2 rounded-[12px] text-sm text-white'>SUBSCRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;