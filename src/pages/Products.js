import React from 'react';
import { GoSearch } from 'react-icons/go';
import ProductCard from '../components/ProductCard';

const Products = () => {
    return (
        <div>
            {/* header  */}
            <div className='bg-blue-500 sticky top-0'>
                <div className='grid grid-cols-3 pt-5 px-2 text-white w-11/12 mx-auto'>
                    <div className='col-span-1'></div>
                    <div className='col-span-1'>
                        <h1 className='text-xl font-semibold'>Categories</h1>
                    </div>
                    <div className='col-span-1 flex justify-end'>
                        <GoSearch className='w-6 h-6 text-white' />
                    </div>
                </div>
                <div className='grid grid-cols-2 text-white mt-3' >
                    <div className='w-full border-b-2 border-white text-center p-4'>
                        <h1>Products</h1>
                    </div>
                    <div className='w-full text-center p-4'>
                        <h1>Categories</h1>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-3 mt-5 mb-28'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Products;