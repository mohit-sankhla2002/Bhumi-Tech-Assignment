import { useState } from 'react'
import logo from '../../assets/logo.svg';
import downArrow from '../../assets/downArrow.svg';
import search from '../../assets/search.svg';
import user from '../../assets/user.svg';
import heart from '../../assets/heart.svg';
import Cart from '../UI/Cart';
import ButtonFilled from '../UI/ButtonFilled';
const HeaderMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => {
      return !prev;
    })
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

      <div className='flex p-2 items-center gap-4'>
        <img src={heart} className='gap-2 w-[28px]'/> 
        <Cart />
        <img src={user} className='gap-2 w-[28px]'/> 
      </div>

      {/* Button */}

      <ButtonFilled className=''>Classifieds</ButtonFilled>
    </div>

  )
}

export default HeaderMain;