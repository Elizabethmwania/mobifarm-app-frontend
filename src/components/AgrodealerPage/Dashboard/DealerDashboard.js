import React from 'react';
import Footer from '../../Common/Footer';
import ClientTransactions from './ClientTransactions';
import DashboardContent from './DashboardContent';
import DealerNav from './DealerNav';
import DealerSideNav from './DealerSideNav';
import LoanTransaction from './LoanTransaction';

const DealerDashboard = () => {
    return (
        <>
        <div className='container-scroller'>
            <DealerSideNav />

            <div className='container-fluid page-body-wrapper'>
                <DealerNav />
                <div className='main-panel' style={{paddingTop:115}}>
                <DashboardContent />
                <LoanTransaction />
                <ClientTransactions />
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default DealerDashboard;