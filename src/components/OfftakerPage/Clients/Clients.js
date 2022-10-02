import React from 'react';
import Footer from '../../Common/Footer';
import FarmersDebts from '../Dashboard/FarmersDebts';
import OfftakerNavbar from '../OfftakerNavbar';
import SideNav from '../SideNav';

const Clients = () => {
    return (
        <>
        <div class="container-scroller">
            <SideNav />
            
            
            <div class="container-fluid page-body-wrapper">
            <OfftakerNavbar />
            <div className='col-lg-12 grid-margin stretch-card'
            style={{ paddingTop:100 }}>
                {/* <div className='card'> */}
                    <FarmersDebts />
                {/* </div> */}
            </div>
            

            </div>
            

        </div>
        <Footer />
        </>
    );
};

export default Clients;