import React from 'react';
import BarGraph from '../../AgrodealerPage/Canvas/BarGraph';
import Footer from '../../Common/Footer';
import AdminLoginNav from '../Login/AdminLoginNav';
import AdminNav from './AdminNav';
import AdminSideNav from './AdminSideNav';
import ClientsPayments from './ClientsPayments';
import PartialLoans from './PartialLoans';
import PartialStatistics from './PartialStatistics';

const AdminDashboard = () => {
    return (
        <>
        <div className='container-scroller'>
            <AdminSideNav />
            

            <div className='container-fluid page-body-wrapper'>
                <AdminNav />
                <div className='main-panel' style={{paddingTop:115}}>
                <PartialLoans /> 
                <PartialStatistics />
                {/* <BarGraph /> */}
                <ClientsPayments />
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default AdminDashboard;