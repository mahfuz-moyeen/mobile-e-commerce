import React, { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsThreeDotsVertical, BsShare } from 'react-icons/bs';

const ProductCard = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='bg-white rounded-xl p-3'>
            <div className='grid grid-cols-3 gap-3'>
                <img className=' col-span-1' src="https://www.ikea.com/nl/en/images/products/lugnare-scented-candle-in-glass-jasmine-pink__1096896_pe864577_s5.jpg" alt="" />

                <div className=' col-span-2' >
                    <div className='flex justify-between'>
                        <h1>Banana Shake</h1>
                        <BsThreeDotsVertical className='w-6 h-6' />
                    </div>
                    <p>1 Unit</p>
                    <p className='text-lg'>$ 49 <span className='line-through'>$ 60</span></p>
                    <div className='flex justify-between'>
                        <p className='text-green-500'>In stock</p>
                        <div
                            onClick={() => setToggle(!toggle)}
                            className={`flex items-center justify-between rounded-3xl bg-blue-500 ${toggle ? 'pr-2 flex-row-reverse' : 'pl-2 flex-row'} `}
                        >
                            <span className='p-1'></span>
                            <GoPrimitiveDot className={`w-10 h-10 text-white`} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-4' />
            <div className='flex justify-center gap-3'>
                <BsShare className='w-6 h-6' />
                <p>Share Product</p>
            </div>
        </div>
    );
};

export default ProductCard;