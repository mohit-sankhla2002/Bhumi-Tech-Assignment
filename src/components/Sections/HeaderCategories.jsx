import {useState} from 'react'
import downArrow from '../../assets/lightDownArrow.svg'
import categories from '../../constants/categories'
const HeaderCategories = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const toggleCategories = () => {
    setOpenCategories((prev) => !prev);
  }
  return (
    <div className='px-section flex items-center gap-10'>
        <div className='relative flex flex-col'>
          <div className='flex gap-2 mr-6' onClick={toggleCategories}>
            <span className='font-light'>All Categories</span> <img src={downArrow} />
          </div>
          {openCategories && <div className='absolute top-[30px] bg-lightGray  left-0 w-full rounded-b-lg shadow-lg flex flex-col'>
          {categories.map(category => (<div key={category.id} className='text-sm p-2 hover:bg-gray-400 transition-all duration-75 ease'>{category.text}</div>))}
          </div>}
      </div>

      <div className='flex gap-5 font-light text-sm'>{categories.map(category => (<div key={category.id} className='cursor-pointer'>{category.text}</div>))}</div>
    </div>
  )
}

export default HeaderCategories;