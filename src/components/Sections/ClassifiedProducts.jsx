import React from 'react'
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';
import ButtonFilled from '../UI/ButtonFilled';
import classifiedProducts from '../../constants/classified-products';
import ClassifiedProduct from '../ClassifiedProduct';
function ClassifiedProducts() {
  return (
    <div className='bg-lightGray px-section py-10 overflow-y-hidden flex'>
        <div className='flex flex-col justify-between w-1/5 gap-10 items-center'>
            {/* Title */}
              <h1 className='text-center text-xl font-semibold tracking-wide'>Classified <br />Products on <br /> the week</h1>
            {/* Navigation Buttons */}
                <div className='flex justify-center gap-10'>
                    <button className='flex justify-center items-center bg-white rounded-full p-4'><img  src={leftArrow}/></button>
                    <button className='flex justify-center items-center bg-white rounded-full p-4'><img  src={rightArrow}/></button>
                </div>
            {/* Button */}
                <ButtonFilled className='flex'>Explore <img src={rightArrow} className='invert w-[15px]'/></ButtonFilled>
        </div>

        <div className='flex gap-4'>
            {classifiedProducts.map(product => <ClassifiedProduct key={product.id} img={product.img} title={product.name} price={product.price} location={product.location}/>)}
        </div>
    </div>
  )
}

export default ClassifiedProducts;