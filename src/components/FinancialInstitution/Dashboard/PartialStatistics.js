import React from 'react';
import { BarGraph } from '../../AgrodealerPage/Canvas/BarGraph';
import LoanCategories from '../../AgrodealerPage/Dashboard/LoanCategories';

const PartialStatistics = () => {
    return (
                    <div class="row">
            
                        <div class="col-md-8 grid-margin stretch-card">
                            <div class="card" style={{border: '1px solid white'}}>
                                <div class="card-body">
                                   
                                    <BarGraph />
                                    
                                </div>

                            </div>
                        </div>
                        <LoanCategories />
                    </div>
    );
};

export default PartialStatistics;