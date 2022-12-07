import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineInfoCircle } from 'react-icons/ai';
import Method from '../components/Method';

const Payment = () => {
    return (
        <div className='bg-white'>
            {/* header  */}
            <div className='bg-blue-500 sticky top-0'>
                <div className='grid grid-cols-3 pt-5 px-2 text-white w-11/12 mx-auto py-4'>
                    <Link to='/'>
                        <AiOutlineArrowLeft className='w-6 h-6' />
                    </Link>
                    <h1 className='text-xl font-semibold'>Payments</h1>
                    <div className='flex justify-end'>
                        <AiOutlineInfoCircle className='w-6 h-6' />
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto'>
                <Method title='Default Method' text='Both Option' />
                <Method title='Payment Profile' text='Bank Account' />
                <hr className='my-10' />
                <div>
                    <Method title='Payment Overview' text='Lifetime' />

                    <div className='grid grid-cols-2 gap-4 my-5'>
                        <div className='p-5 bg-orange-500 rounded-lg text-white'>
                            <h1 className='text-lg mb-2'>AMOUNT ON HOLD</h1>
                            <span className='text-3xl font-semibold mb-2'>$701</span>
                        </div>
                        <div className='p-5 bg-green-500 rounded-lg text-white'>
                            <h1 className='text-lg mb-2'>AMOUNT PRACETIVED</h1>
                            <span className='text-3xl font-semibold mb-2'>$701</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;