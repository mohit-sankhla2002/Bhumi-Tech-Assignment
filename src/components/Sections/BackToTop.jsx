import React from 'react'
import upArrow from '../../assets/upArrow.svg'
function BackToTop() {
  return (
    <a href='#header' className='bg-lightGray flex gap-3 text-gray-600 text-xl items-center justify-center w-full px-section py-6'>
      <span>Back To Top</span> <img src={upArrow} />
    </a>
  )
}

export default BackToTop;