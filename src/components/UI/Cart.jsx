import cart from '../../assets/cart.svg';

function Cart({onClick}) {
  return (
    <div onClick={onClick} className='relative'>
        <div className='absolute w-[20px] h-[20px] -top-2 -right-2 bg-darkBlue rounded-full text-xs text-white z-10 flex items-center justify-center'>
          <p>3</p>
        </div>
        <img src={cart} className='w-[28px]'/>
    </div>
  )
}

export default Cart;