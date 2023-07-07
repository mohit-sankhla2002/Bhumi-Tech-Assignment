import React from 'react'

function CartItem({title, price, quantity}) {
    const totalPrice = price * quantity;
  return (
    <div className='flex flex-col border border-black rounded-lg'>
        <h3 className='text-lg'>{title}</h3>
        <div className='flex justify-between'>
            <p className='text-sm'>${price}</p>
            <p className='text-sm'>X{quantity}</p>
        </div>
        <h3 className='text-darkBlue'>${totalPrice}</h3>
    </div>
  );
}

export default CartItem;