import React from 'react'

const ButtonFilled = ({children, className}) => {
  return (
    <button className={`flex items-center justify-center bg-lightBlue text-white font-semibold shadow-bs1 rounded-[12px] py-3 px-5 ${className}`}>{children}</button>
  )
}

export default ButtonFilled;