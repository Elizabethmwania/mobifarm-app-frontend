import React from 'react';
import Footer from '../Common/Footer';
import Trainers from '../LandingPage/Trainers';
import Enroll from './Enroll';
import FarmerHeader from './FarmerHeader';
import FarmerNavBar from './FarmerNavBar';
import Training from './Training';


const FarmerIndex = () => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
    return (
        <>
        <FarmerHeader />
        <FarmerNavBar />
        <Training />
        <Enroll />
        <Trainers />
        <Footer />
        
        </>
    );
};

export default FarmerIndex;