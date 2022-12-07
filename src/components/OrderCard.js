import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const OrderCard = ({ order }) => {
    const { id, name, img, time, item, price, status, pay } = order;

    return (
        <div className='bg-white p-3 rounded-lg'>
            <div className='flex justify-between my-1'>
                <h1 className='text-xl'>{name}</h1>
                <span>{time}</span>
            </div>

            <div className='grid grid-cols-4 items-center gap-3'>
                <img className='col-span-1 w-fit rounded-lg' src={img} alt="" />

                <div className='col-span-2'>
                    <p>{item} {item > 1 ? 'ITEMS' : 'ITEM'}</p>
                    <p className='text-blue-500'>${price}</p>
                </div>

                <span className='col-span-1 bg-orange-500 rounded-lg text-xl text-center p-1'>{pay ? 'PAID' : '--'}</span>

            </div>

            <hr className='my-4'/>
            <div className='flex justify-between'>
                <span className='flex items-center '>
                    {status === 'Pending' && (< GoPrimitiveDot className='w-6 h-6 text-yellow-500' />)}
                    {status === 'Shipped' && (< GoPrimitiveDot className='w-6 h-6 text-orange-500' />)}
                    {status === 'Accepted' && (< GoPrimitiveDot className='w-6 h-6 text-green-500' />)}
                    {status}
                </span>
                <button className='border-2 p-2 rounded-lg'>Details</button>
            </div>
        </div>
    );
};

export default OrderCard;