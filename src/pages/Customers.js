import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

const Customers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('customers.json')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, []);

    return (
        <div>
            {/* header  */}
            <div className='bg-blue-500 sticky top-0'>
                <div className='grid grid-cols-3 pt-5 px-2 text-white'>
                    <Link to='/'>
                        <AiOutlineArrowLeft className='w-8 h-8' />
                    </Link>
                    <h1 className='text-xl font-semibold'>My Customers</h1>
                    <div></div>
                </div>
                <div className='p-5 '>
                    <input
                        className='w-full p-3 rounded-lg'
                        type="text"
                        placeholder='Search by customers name..'
                    />
                </div>
            </div>

            <div className='w-11/12 mx-auto grid grid-cols-1 gap-3 mt-5 m-32'>
                {
                    customers.map(customer => <div
                        key={customer?.id}
                        className='p-5 bg-white shadow-lg flex items-center gap-4'
                    >
                        <Avatar name={`${customer?.firstName} ${customer?.lastName}`} />

                        <div>
                            <h1 className='text-2xl font-semibold'>{customer?.firstName} {customer?.lastName}</h1>

                            <p className='text-lg text-gray-500'>{customer?.orders} {customer?.orders > 1 ? 'orders' : 'order'}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Customers;