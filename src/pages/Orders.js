import React, { useEffect, useState } from 'react';
import { GoSettings } from 'react-icons/go';
import OrderCard from '../components/OrderCard';


const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('orders.json')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    return (
        <div>
            {/* header  */}
            <div className='bg-blue-500 sticky top-0'>
                <div className='grid grid-cols-3 pt-5 px-2 text-white w-11/12 mx-auto'>
                    <div className='col-span-1'></div>
                    <div className='col-span-1'>
                        <h1 className='text-xl font-semibold'>All Orders({orders?.length})</h1>
                    </div>
                    <div className='col-span-1 flex justify-end'>
                        <GoSettings className='w-6 h-6 text-white' />
                    </div>
                </div>
                <div className='p-5 '>
                    <input
                        className='w-full p-3 rounded-lg'
                        type="text"
                        placeholder='Search by orders name..'
                    />
                </div>
            </div>

            {/* show orders  */}
            <div className='w-11/12 mx-auto grid grid-cols-1 gap-3 mt-5 mb-28'>
                {
                    orders?.map(order => <OrderCard
                        key={order?.id}
                        order={order}
                    />)
                }
            </div>
        </div>
    );
};

export default Orders;