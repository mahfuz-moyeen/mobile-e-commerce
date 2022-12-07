import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const OverView = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>Overview</h1>
                <div className='flex items-center gap-1'>
                    <span >Last Week</span>
                    <IoIosArrowDown className='w-6 h-6'/>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 my-5'>
                <div className='p-5 bg-white rounded-lg'>
                    <h1 className='text-lg mb-2'>ORDERS</h1>
                    <span className='text-3xl font-semibold mb-2'>33</span>
                </div>
                <div className='p-5 bg-white rounded-lg'>
                    <h1 className='text-lg mb-2'>TOTAL SALES</h1>
                    <span className='text-3xl font-semibold mb-2'>$ 2,918</span>
                </div>
                <div className='p-5 bg-white rounded-lg'>
                    <h1 className='text-lg mb-2'>STORE VIEWS</h1>
                    <span className='text-3xl font-semibold mb-2'>301</span>
                </div>
                <div className='p-5 bg-white rounded-lg'>
                    <h1 className='text-lg mb-2'>PRODUCT VIEWS</h1>
                    <span className='text-3xl font-semibold mb-2'>19,121</span>
                </div>

            </div>
        </div>
    );
};

export default OverView;