import React from 'react';
import Footer from '../Common/Footer';
import FarmerHeader from '../FarmersPage/FarmerHeader';
import AboutContent from './AboutContent';
import AboutNav from './AboutNav';

const AboutMain = () => {
    return (
        <>
            <FarmerHeader />
            <AboutNav />
            <AboutContent />
            
            <Footer />
        </>
    );
};

export default AboutMain;