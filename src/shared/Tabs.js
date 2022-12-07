import React from 'react';
import { AiOutlineHome, AiOutlineShop, AiOutlineAppstore, AiOutlineTeam, AiOutlineCopy } from 'react-icons/ai';
import { BsPaypal } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const Tabs = () => {
    const location = useLocation();

    console.log(location.pathname);

    return (
        <div className='absolute bottom-0 min-w-full bg-white'>
            <div className='flex justify-around p-5 border-t-2 border-black'>
                <Link to='/'>
                    <div className={`flex flex-col items-center ${location?.pathname === '/' ? 'text-blue-500' : ''}`}>
                        <AiOutlineHome className='w-8 h-8' />
                        <h1>Home</h1>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className={`flex flex-col items-center ${location?.pathname === '/orders' ? 'text-blue-500' : ''}`}>
                        <AiOutlineShop className='w-8 h-8' />
                        <h1>Orders</h1>
                    </div>
                </Link>
                <Link to='/products'>
                    <div className={`flex flex-col items-center ${location?.pathname === '/products' ? 'text-blue-500' : ''}`}>
                        <AiOutlineAppstore className='w-8 h-8' />
                        <h1>Products</h1>
                    </div>
                </Link>
                <Link to='/payment'>
                    <div className={`flex flex-col items-center ${location?.pathname === '/payment' ? 'text-blue-500' : ''}`}>
                        <BsPaypal className='w-8 h-8' />
                        <h1>Payment</h1>
                    </div>
                </Link>
                <Link to='/customers'>
                    <div className={`flex flex-col items-center ${location?.pathname === '/customers' ? 'text-blue-500' : ''}`}>
                        <AiOutlineTeam className='w-8 h-8' />
                        <h1>Customers</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Tabs;