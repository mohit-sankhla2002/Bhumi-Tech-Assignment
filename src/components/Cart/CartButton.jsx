import React from 'react'

function CartButton({children, className, onClick}) {
  return (
    <button onClick={onClick} className={`${className} px-2 shadow-md font-bold text-lg border-2 border-darkBlue`}>{children}</button>
  )
}

export default CartButton;