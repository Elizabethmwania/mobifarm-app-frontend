import React from 'react';
import FarmerHeader from './FarmerHeader';
import FarmerNavBar from './FarmerNavBar';


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
        </>
    );
};

export default FarmerIndex;