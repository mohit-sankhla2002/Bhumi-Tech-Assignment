import React from 'react'
import { useSelector } from 'react-redux';
import ButtonFilled from '../UI/ButtonFilled';
function Cart() {
  return (
    <div className='bg-white flex flex-col w-full rounded-lg items-center'>
      <h1 className='text-4xl '>Cart</h1>
      
      <div className='flex p-2 gap-3 w-[40%] justify-between'>
        <ButtonFilled>Order</ButtonFilled>
        <ButtonFilled>Close Cart</ButtonFilled>
      </div>
    </div>
  )
}

export default Cart;