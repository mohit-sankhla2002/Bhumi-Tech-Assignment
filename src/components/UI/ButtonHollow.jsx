import React from 'react'

function ButtonHollow({className, onClick, children}) {
  return (
    <button onClick={onClick} className={`bg-white border-2 border-darkBlue outline-none text-darkBlue font-light ${className}`}>{children}</button>
  )
}

export default ButtonHollow;