import React from 'react'
import bestDeals from '../../constants/best-deals';
import star from '../../assets/star.svg';
function BestDeals() {
    return (
        <div className='px-section py-10 flex flex-col gap-5'>
            <div className='flex justify-between'>
                <h3 className='text-xl font-medium'>Best Deals</h3>
                <a href='#' className='text-darkBlue'>View All</a>
            </div>
            <div className='grid grid-cols-5 gap-4'>
                {bestDeals.map((deal, index) => {
                    const stars = [];
                    for (let i = 0; i < deal.stars; i++) {
                        stars.push(<img src={star} className='w-[15px]' />)
                    }
                    return <div key={index} className='flex p-2 gap-2 rounded-[15px]'>
                        <img src={deal.img} alt={deal.title} className='w-[120px]' />
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
                })}
            </div>
        </div>
    )
}

export default BestDeals;