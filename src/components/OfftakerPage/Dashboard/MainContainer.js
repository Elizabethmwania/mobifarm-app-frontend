import React from 'react';
import { Container, Row,Col, CardBody, Navbar } from 'reactstrap';
import FarmersDebts from './FarmersDebts';
import ListProducts from '../Products/ListProducts';
import SomeProducts from '../Products/SomeProducts';

const MainContainer = () => {
    return (
        <>
        <div class="col-lg-12 stretch-card" style={{ paddingTop: 115}}>
                <div class="card" style={{ border:'none', boxShadow:'none' }}>
                    <div class="row">
                        <div class="col-xl-4 col-sm-6 stretch-card">
                            <div class="card" style={{backgroundColor:'#a8e063'}} >
                                <div class="card-body">
                                    <h5>All Farmers</h5>
                                    <div class="row">
                                        <div class="col-8 col-sm-12 col-xl-8 my-auto">
                                            <div class="d-flex d-sm-block d-md-flex align-items-center">
                                                <h2 class="mb-0">500</h2>
                                            </div>
                                        </div>
                                        <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                            <i class="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 stretch-card">
                            <div class="card" style={{backgroundColor:' #d6ae7b'}}>
                                <div class="card-body">
                                    <h5>Borrowed Items</h5>
                                    <div class="row">
                                        <div class="col-8 col-sm-12 col-xl-8 my-auto">
                                            <div class="d-flex d-sm-block d-md-flex align-items-center">
                                                <h2 class="mb-0">500</h2>
                                            </div>
                                        </div>
                                        <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                            <i class="icon-lg mdi mdi-monitor text-success ml-auto"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 stretch-card">
                            <div class="card" style={{backgroundColor:'#ddd6f3'}}>
                                <div class="card-body">
                                    <h5>Balances</h5>
                                    <div class="row">
                                        <div class="col-8 col-sm-12 col-xl-8 my-auto">
                                            <div class="d-flex d-sm-block d-md-flex align-items-center">
                                                <h2 class="mb-0">500</h2>
                                            </div>
                                        </div>
                                        <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                            <i class="icon-lg mdi mdi-wallet-travel text-danger ml-auto"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FarmersDebts />
                    <SomeProducts/> 
                </div>
             </div>
             </>

     );
};

export default MainContainer;