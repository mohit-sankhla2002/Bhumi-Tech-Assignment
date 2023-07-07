import React from 'react'
function FlashProduct({img, title, price, totalItem, itemLeft}) {
    const percentage = (itemLeft / totalItem) * 100;
    return <div className='bg-white flex px-6 py-3 gap-4 rounded-[15px] w-[25vw] items-center'>
        <img src={img} alt="image" className='w-[85px] h-[100px]' />
        <div className='flex flex-col w-full justify-between h-full'>
            <p className='text-sm min-h-[40px]'>{title}</p>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <p className='text-darkBlue font-medium text-lg'>${price}</p>
                    <p className='text-gray-500'>{itemLeft} left</p>
                </div>
                <div className='w-full h-[10px] bg-gray-300 rounded-xl flex justify-start'>
                    <div className='bg-darkBlue h-full rounded-xl' style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
            
        </div>
    </div>
}

export default FlashProduct;