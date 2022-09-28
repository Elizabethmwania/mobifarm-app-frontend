import React from 'react';
import Footer from '../../Common/Footer';
import AdminNav from '../Dashboard/AdminNav';
import AdminSideNav from '../Dashboard/AdminSideNav';
import ClientsPayments from '../Dashboard/ClientsPayments';

const ClientRecords = () => {
    return (
        <>
        <div className='container-scroller'>
            <AdminSideNav />
            

            <div className='container-fluid page-body-wrapper'>
                <AdminNav />
                <div className='main-panel' style={{paddingTop:80}}>
                <ClientsPayments /> 
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default ClientRecords;