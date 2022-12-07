import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import OrderCard from '../../components/OrderCard';

const ActiveOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('orders.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data?.filter(x => x.status === "Accepted");
                setOrders(filterData)
            })
    }, []);
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>Active Orders</h1>
                <div className='flex items-center gap-1'>
                    <span >Last Week</span>
                    <IoIosArrowDown className='w-6 h-6' />
                </div>
            </div>

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

export default ActiveOrders;