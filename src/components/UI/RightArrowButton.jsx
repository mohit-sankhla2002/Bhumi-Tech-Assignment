import React from 'react'
import rightArrow from '../../assets/rightArrow.svg';
function RightArrowButton({className, onClick}) {
  return (
      <button onClick={onClick} className={`${className} flex justify-center items-center bg-white rounded-full p-4 shadow-lg`}><img src={rightArrow} /></button>
  )
}

export default RightArrowButton;