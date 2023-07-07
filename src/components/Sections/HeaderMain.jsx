import { useState } from 'react'
import logo from '../../assets/logo.svg';
import downArrow from '../../assets/downArrow.svg';
import search from '../../assets/search.svg';
import user from '../../assets/user.svg';
import heart from '../../assets/heart.svg';
import Cart from '../UI/Cart';
import ButtonFilled from '../UI/ButtonFilled';
import { Link } from 'react-router-dom';
import { toggleCartActions } from '../../store/slices/toggleCartSlice';
import { useDispatch, useSelector } from 'react-redux';

const HeaderMain = () => {
  const uid = useSelector(state => state.user.uid);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setIsOpen((prev) => {
      return !prev;
    })
  };

  const openCartHandler = () => {
    dispatch(toggleCartActions.openCart());
  };

  return (
    <div className='px-section py-10 flex items-center justify-between'>
      {/* Logo */}
      <img src={logo} alt="" className='w-[150px]' />
      {/* Dropdown */}
      <div className='relative flex flex-col items-center'>
        <button className='flex gap-2 items-center px-5 py-3 bg-lightGray rounded-[12px]' onClick={toggleDropdown}>Classifieds<img src={downArrow} /></button>
        {isOpen && (<div className='z-10 absolute w-full bg-lightGray top-[50px] rounded-b-lg'>
          <div className='rounded-[12px] w-full px-5 py-3'>Option-1</div>
          <div className='rounded-[12px] w-full px-5 py-3'>Option-2</div>
          <div className='rounded-[12px] w-full px-5 py-3'>Option-3</div>
          <div className='rounded-[12px] w-full px-5 py-3'>Option-4</div>
        </div>)}
      </div>

      {/* Search Bar */}
      <div className='flex bg-lightGray rounded-[12px] p-3 w-[500px] gap-2'>
        <input placeholder='Search here...' className='outline-none border-none bg-transparent w-full' />
        <img src={search} className='w-[24px] cursor-pointer' />
      </div>

      {/* Options */}

      {uid && <div className='flex p-2 items-center gap-4'>
        <Link to={'/wishlist'}>
          <img src={heart} className='gap-2 w-[28px]'/> 
        </Link>
        <Cart onClick={openCartHandler}/>
        <Link to={'/user'}>
          <img src={user} className='gap-2 w-[28px]'/> 
        </Link>
      </div>}

      {/* Button */}
      {!uid && <Link to={'/login'}><ButtonFilled>Login</ButtonFilled></Link>}

      <ButtonFilled>Classifieds</ButtonFilled>
    </div>

  )
}

export default HeaderMain;