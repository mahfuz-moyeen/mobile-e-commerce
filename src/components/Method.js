import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';


const Method = ({ title ,text}) => {
    return (
        <div className='flex justify-between items-center my-3'>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className='flex items-center gap-1'>
                <span >{text}</span>
                <MdOutlineArrowForwardIos className='w-6 h-6' />
            </div>
        </div>
    );
};

export default Method;