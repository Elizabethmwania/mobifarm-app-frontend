import React from 'react';
import Footer from '../../Common/Footer';
import ClientTransactions from '../Dashboard/ClientTransactions';
import DealerNav from '../Dashboard/DealerNav';
import DealerSideNav from '../Dashboard/DealerSideNav';

const DealerClients = () => {
    return (
        <>
        <div className='container-scroller'>
            <DealerSideNav />

        <div className='container-fluid page-body-wrapper'>
            <DealerNav />
            <div className='main-panel' style={{paddingTop:100}}>
            <ClientTransactions />
            </div>
        </div>
        
         </div>
         <Footer />
         </>
    
    );
};

export default DealerClients;