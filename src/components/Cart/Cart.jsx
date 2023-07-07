import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ButtonFilled from '../UI/ButtonFilled';
import CartItem from './CartItem';
import {toggleCartActions} from '../../store/slices/toggleCartSlice';

function Cart() {
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(toggleCartActions.closeCart());
  };
  const cartItems = useSelector(state => state.cart.items);
  const cartTotal = useSelector(state => state.cart.totalAmount);
  console.log(cartItems);
  const cartIsEmpty = cartItems.length === 0;
  return (
    <div className='bg-white flex flex-col w-full rounded-lg justify-center items-center p-[50px] h-[80vh]'>
      <h1 className='text-4xl mb-4'>Cart</h1>
      <div className='flex flex-col gap-4 w-[40%] overflow-y-scroll'>
      {cartIsEmpty && <h3 className='text-2xl text-center text-gray-600 font-medium'>Your cart is empty</h3>}
      {!cartIsEmpty && cartItems.map((item, index) => {
        return <CartItem key={index} id={item.id} title={item.title} price={item.price} quantity={item.quantity} />
      })}
      </div>
      <h3 className='text-xl p-2'>Total: ${cartTotal}</h3>
      <div className='flex p-2 gap-3 w-[40%] justify-between'>
        <ButtonFilled>Order</ButtonFilled>
        <ButtonFilled onClick={closeCartHandler}>Close Cart</ButtonFilled>
      </div>

    </div>
  )
}

export default Cart;