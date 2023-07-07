import React from 'react'
import star from '../assets/star.svg'
import ButtonHollow from './UI/ButtonHollow';
import { cartActions } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';
function HotSaleProduct({ id,  img, title, originalPrice, discountedPrice, rating }) {
    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch(cartActions.addItem({
            id, 
            title, 
            price: discountedPrice
        }));
    };

    return (
        <div className='recommended-product flex flex-col justify-between'>
            <div className='px-2 pt-2 w-full h-full'>
                <img src={img} className='h-[200px]'/>
            </div>
            <div className='p-4 flex flex-col'>
                <p className='text-sm min-h-[70px]'>{title}</p>
                <p className='text-darkBlue'>${discountedPrice}</p>
                <div className='flex justify-between items-center'>
                    <span className='text-sm line-through text-gray-500'>${originalPrice}</span>
                    <span className='text-sm  text-gray-500 flex gap-1 items-center'>
                        <p className=''>{rating}</p>
                        <img src={star} />
                    </span>
                </div>
                <ButtonHollow onClick={addToCartHandler} className={`w-full rounded-[12px] mt-4 text-sm py-2`}>Add to Cart</ButtonHollow>
            </div>
        </div>
    )
}

export default HotSaleProduct;