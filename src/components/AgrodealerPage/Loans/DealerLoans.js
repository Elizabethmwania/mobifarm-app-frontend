import React from 'react';
import Footer from '../../Common/Footer';
import DealerNav from '../Dashboard/DealerNav';
import DealerSideNav from '../Dashboard/DealerSideNav';
import LoanTransaction from '../Dashboard/LoanTransaction';

const DealerLoans = () => {
    return (
        <>
        <div className='container-scroller'>
            <DealerSideNav />

            <div className='container-fluid page-body-wrapper'>
                <DealerNav />
                <div className='main-panel' style={{paddingTop:100}}>
                
                <LoanTransaction />
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default DealerLoans;