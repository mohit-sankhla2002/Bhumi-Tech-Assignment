import cart from '../../assets/cart.svg';

function Cart() {
  return (
    <div className='relative p-2 flex'>
        <div className='absolute top-0 right-0 bg-darkBlue rounded-full text-sm text-white'>3</div>
        <img src={cart} className='w-[28px]'/>
    </div>
  )
}

export default Cart;