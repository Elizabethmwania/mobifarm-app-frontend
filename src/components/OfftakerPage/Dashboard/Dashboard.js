import React from 'react';
import Footer from '../../Common/Footer';
import MainContainer from './MainContainer';
import OfftakerNavbar from '../OfftakerNavbar';
import SideNav from '../SideNav';
import ListProducts from '../Products/ListProducts';
import SomeProducts from '../Products/SomeProducts';

const Dashboard = () => {
    return (
        <>
        <div class="container-scroller">
        <SideNav />
        <div class="container-fluid page-body-wrapper">
        <OfftakerNavbar />
        <MainContainer />
        </div>
        </div>
        
        <Footer />
        </>
    );
};

export default Dashboard;