import React from 'react';
import { PieChart } from '../Canvas/PieChart';
import LoanCategories from './LoanCategories';

const LoanTransaction = () => {
    return (
        <div className='row'>
                <div class="col-md-8 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <PieChart />
                            </div>
                        </div>  
                                    
                 </div>
                 <LoanCategories />
        </div>
    );
};

export default LoanTransaction;