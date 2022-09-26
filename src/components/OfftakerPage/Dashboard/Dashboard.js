import React from 'react';
import FarmersDebts from './FarmersDebts';
import Footer from './Footer';
import Header from './Header';
import MainContainer from './MainContainer';
import OfftakerNavbar from './OfftakerNavbar';
import SideNav from './SideNav';
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