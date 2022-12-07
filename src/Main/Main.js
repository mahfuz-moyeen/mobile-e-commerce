import React from 'react';
import { Outlet } from 'react-router-dom';
import Tabs from '../shared/Tabs';

const Main = () => {
    return (
        <div className='relative min-h-screen'>
            <Tabs />
            <div className='max-h-screen overflow-y-auto bg-gray-100'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;