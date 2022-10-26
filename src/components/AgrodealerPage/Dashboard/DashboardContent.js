import React from 'react';
import { Container } from 'reactstrap';

const DashboardContent = () => {
    return (
        <Container>
        <div className='row'>
            <div className="col-xl-4 col-sm-6 grid-margin stretch-card">
                        <div class="card" style={{backgroundColor:'#a8e063'}}>
                            <div class="card-body">
                                <h5>Active Loans</h5>
                                <div class="row">
                                    <div class="col-8 col-sm-12 col-xl-8 my-auto">
                                        <div class="d-flex d-sm-block d-md-flex align-items-center">
                                            <h4 class="mb-0">$32123</h4>
                                        </div>
                                    </div>
                                    <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                        <i class="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 grid-margin stretch-card">
                        <div class="card" style={{backgroundColor:' #d6ae7b'}}>
                            <div class="card-body">
                                <h5>Pending Loans</h5>
                                <div class="row">
                                    <div class="col-8 col-sm-12 col-xl-8 my-auto">
                                        <div class="d-flex d-sm-block d-md-flex align-items-center">
                                            <h4 class="mb-0">$45850</h4>
                                        </div>
                                    </div>
                                    <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                        <i class="icon-lg mdi mdi-wallet-travel text-danger ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-8 grid-margin stretch-card">
                        <div class="card" style={{backgroundColor:'#ddd6f3'}}>
                            <div class="card-body">
                                <h5>All clients</h5>
                                <div class="row">
                                    <div class="col-8 col-sm-12 col-xl-8 my-auto">
                                        <div class="d-flex d-sm-block d-md-flex align-items-center">
                                            <h4 class="mb-0">$2039</h4>
                                        </div>
                                    </div>
                                    <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                        <i class="icon-lg mdi mdi-monitor text-success ml-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
        </div>
        </Container>
    );
};

export default DashboardContent;