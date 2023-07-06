import React from 'react'
import recommendedProducts from '../../constants/recommended-products';
import RecommendedProduct from '../RecommendedProduct';
function Recommended() {
  return (
    <div className='flex flex-col px-section py-4 gap-4'>
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-xl font-medium'>Recommended</h1>
            <a href='#' className='text-sm text-darkBlue'>View all</a>
        </div>
        <div className='flex gap-2'>
          {recommendedProducts.map(product => {
            return <RecommendedProduct key={product.id} img={product.img} title={product.name} rating={product.rating} originalPrice={product.originalPrice} discountedPrice={product.discountedPrice} discountBanner={product.discountBanner} />
          })}
        </div>
    </div>
  )
}

export default Recommended;