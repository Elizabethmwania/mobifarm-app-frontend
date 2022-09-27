import React from 'react';
import Footer from '../../Common/Footer';
import OfftakerNavbar from '../OfftakerNavbar';
import SideNav from '../SideNav';
import RegistrationForm from './RegistrationForm';

const FarmerRegistration = () => {
    return (
        <>
        <div class="container-scroller">
        <SideNav />
        <div class="container-fluid page-body-wrapper">
        <OfftakerNavbar />
        <RegistrationForm />
        </div>
        </div>
        <Footer />
        </>
    );
};

export default FarmerRegistration;