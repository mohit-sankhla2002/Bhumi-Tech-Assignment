import React from 'react'
import star from '../assets/star.svg'
function RecentlyViewedProduct(deal) {
    const stars = [];
    for (let i = 0; i < deal.stars; i++) {
        stars.push(<img src={star} className='w-[15px]' />)
    }
    return <div className='flex p-2 gap-2 shadow-lg rounded-[15px]'>
        <img src={deal.img} alt={deal.name} className='w-[120px]' />
        <div className='flex flex-col justify-between py-3'>
            <p className='text-sm'>{deal.title}</p>
            <h5 className='text-darkBlue font-medium'>${deal.price}</h5>
            <div className='flex items-center gap-1'>
                <span className='flex'>
                    {...stars}
                </span>
                <p className='text-gray-500 text-xs'>
                    ({deal.ratings})
                </p>
            </div>
        </div>
    </div>;
}

export default RecentlyViewedProduct;