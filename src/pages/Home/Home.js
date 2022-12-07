import React from 'react';
import ActiveOrders from './ActiveOrders';
import HomeTop from './HomeTop';
import OverView from './OverView';
const Home = () => {
    return (
        <div >
            <HomeTop />

            <OverView />

            <ActiveOrders />
        </div>
    );
};

export default Home;