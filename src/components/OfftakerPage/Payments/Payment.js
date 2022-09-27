import React from 'react';
import Footer from '../../Common/Footer';
import OfftakerNavbar from '../OfftakerNavbar';
import SideNav from '../SideNav';
import FileUpload from './FileUpload';

const Payment = () => {
    
    return (
        <>
        <div class="container-scroller">
        <SideNav />
        <div class="container-fluid page-body-wrapper">
        <OfftakerNavbar />
        <FileUpload />
        </div>
        </div>
        <Footer />
        </>
    );
};

export default Payment;