import React from 'react';
import Footer from '../../Common/Footer';
import AdminNav from '../Dashboard/AdminNav';
import AdminSideNav from '../Dashboard/AdminSideNav';
import ClientsPayments from '../Dashboard/ClientsPayments';
import PartialLoans from '../Dashboard/PartialLoans';
import PartialStatistics from '../Dashboard/PartialStatistics';

const LoanStatistics = () => {
    return (
        <>
        <div className='container-scroller'>
            <AdminSideNav />
            

            <div className='container-fluid page-body-wrapper'>
                <AdminNav />
                <div className='main-panel' style={{paddingTop:80}}>
                
                <ClientsPayments />
                <PartialStatistics />
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default LoanStatistics;