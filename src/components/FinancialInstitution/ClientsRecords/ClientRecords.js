import React from 'react';
import Footer from '../../Common/Footer';
import AdminNav from '../Dashboard/AdminNav';
import AdminSideNav from '../Dashboard/AdminSideNav';
import ClientsPayments from '../Dashboard/ClientsPayments';
import ManageFarmers from './ManageFarmers';

const ClientRecords = () => {
    return (
        <>
        <div className='container-scroller'>
            <AdminSideNav />
            

            <div className='container-fluid page-body-wrapper'>
                <AdminNav />
                <div className='main-panel' style={{paddingTop:115}}>
                {/* <ClientsPayments />  */}
                <ManageFarmers />
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default ClientRecords;