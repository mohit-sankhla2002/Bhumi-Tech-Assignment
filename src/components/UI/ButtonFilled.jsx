import React from 'react'

const ButtonFilled = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={`flex items-center justify-center bg-lightBlue text-white font-semibold shadow-bs1 rounded-[12px] py-3 px-5 ${className}`}>{children}</button>
  )
}

export default ButtonFilled;