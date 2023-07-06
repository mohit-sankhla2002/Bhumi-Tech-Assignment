import React from 'react'

function FlashProduct({ img, title, price, itemLeft, totalItem }) {
    const percentage = (itemLeft / totalItem) * 100;
    console.log(percentage);
    return <div className='bg-white flex px-6 py-3 gap-4 rounded-[15px] items-center'>
        <img src={img} alt="image" className='border w-[85px] h-[100px]' />
        <div className='flex flex-col w-full justify-around'>
            <p className='text-sm mb-6'>{title}</p>
            <div className='flex justify-between'>
                <p className='text-darkBlue font-medium text-lg'>${price}</p>
                <p className='text-gray-500'>{itemLeft} left</p>
            </div>
            <div className='w-full h-[10px] bg-gray-300 rounded-xl flex justify-start'>
                <div className='bg-darkBlue h-full rounded-xl' style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    </div>
}

export default FlashProduct;