import React from 'react'
import CartButton from './CartButton';
import {cartActions} from '../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';
function CartItem({id, title, price, quantity}) {
    const totalPrice = price * quantity;
    const dispatch = useDispatch();
    const removeItemHandler = () => {
      dispatch(cartActions.removeItem({id}));
    }
    const addItemHandler = () => {
      dispatch(cartActions.addItem({id, title, price}));
    }
  return (
    <div className='flex flex-col border border-black rounded-lg p-3 gap-2 shadow-lg justify-between'>
        <h3 className='text-sm min-h-[20px] border'>{title}</h3>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
              <p className='text-sm'>${price}</p>
              <p className='text-sm'>X{quantity}</p>
          </div>
          <div className='flex items-center gap-2 '>
            <CartButton onClick={removeItemHandler}>-</CartButton>
            <CartButton onClick={addItemHandler}>+</CartButton>
          </div>
        </div>
        <h3 className='text-darkBlue'>Total: ${totalPrice}</h3>
    </div>
  );
}

export default CartItem;