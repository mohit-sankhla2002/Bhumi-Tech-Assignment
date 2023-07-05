import {useState} from 'react'
import logo from '../../assets/logo.svg'
import downArrow from '../../assets/downArrow.svg'
const HeaderMain = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className='px-section py-10 flex'>
      <img src={logo} alt="" className='border' />
      <div className='flex items-center p-4 bg-lightGray rounded-[12px]'>
        <span className='text-lg text-gray-700'>Classifieds</span>
        <img src={downArrow}/>
      </div>
    </div>
  )
}

export default HeaderMain;