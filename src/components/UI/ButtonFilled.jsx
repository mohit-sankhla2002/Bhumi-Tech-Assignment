import React from 'react'

const ButtonFilled = ({children}) => {
  return (
    <button className='bg-lightBlue text-white font-semibold shadow-bs1 rounded-[12px] py-3 px-5'>{children}</button>
  )
}

export default ButtonFilled;