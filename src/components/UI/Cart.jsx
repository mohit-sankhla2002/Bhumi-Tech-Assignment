import cart from '../../assets/cart.svg';
import { useSelector } from 'react-redux';
function Cart({onClick}) {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <div onClick={onClick} className='relative'>
        <div className='absolute w-[20px] h-[20px] -top-2 -right-2 bg-darkBlue rounded-full text-xs text-white z-10 flex items-center justify-center'>
          <p>{cartItems.length}</p>
        </div>
        <img src={cart} className='w-[28px]'/>
    </div>
  )
}

export default Cart;