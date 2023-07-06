import React from 'react'
import leftArrow from '../../assets/leftArrow.svg';
function LeftArrowButton({className, onClick}) {
  return (
      <button onClick={onClick} className={`${className} flex shadow-lg justify-center items-center bg-white rounded-full p-4`} ><img src={leftArrow} /></button>
  )
}

export default LeftArrowButton;