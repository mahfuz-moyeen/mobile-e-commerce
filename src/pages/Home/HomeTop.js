import React, { useState } from 'react';

import { GoPrimitiveDot } from 'react-icons/go';
import { BsWhatsapp, BsPatchCheckFill } from 'react-icons/bs';

const HomeTop = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='relative min-h-[280px]'>
            <div className='flex justify-between p-2 absolute top-0 w-full bg-blue-500 pb-20'>
                <div className='flex gap-1 text-white'>
                    <h1 className='font-semibold'>Mono Super Market</h1>
                    <BsPatchCheckFill className='w-6 h-6' />
                </div>
                <div
                    onClick={() => setToggle(!toggle)}
                    className={`flex items-center justify-between bg-white rounded-3xl ${toggle ? 'pr-2 flex-row-reverse' : 'pl-2 flex-row'} `}
                >
                    <span>{toggle ? 'Offline' : 'Online'}</span>
                    <GoPrimitiveDot className={`w-10 h-10 ${toggle ? 'text-gray-500' : 'text-blue-500'}`} />
                </div>
            </div>
            <div className='absolute top-16 z-10 w-full'>
                <div className='p-3 bg-white rounded-lg w-11/12 mx-auto'>
                    <h1>Share more to Earn More</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus facilis repellendus eos enim modi saepe? Ut culpa earum, magnam vel voluptate quia!</p>
                    <div className='flex justify-between items-center'>
                        <span className='text-red-500'>madzkeoEo/oe/djfjto</span>
                        <div className='bg-green-500 rounded-lg text-white flex items-center gap-2 px-4 py-2'>
                            <BsWhatsapp className='w-6 h-6' />
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTop;