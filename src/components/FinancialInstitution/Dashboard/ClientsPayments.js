import React from 'react';
import face1 from '../../../img/faces/face1.jpg'
import face2 from '../../../img/faces/face2.jpg'
import face3 from '../../../img/faces/face3.jpg'
import face15 from '../../../img/faces/face15.jpg'
import mpesa from '../../../img/gateway/mpesa.png'
import paypal from '../../../img/gateway/paypal.png'
import Pagination from '../../Common/Pagination';

const ClientsPayments = () => {
    return (
        <>
            <div className='col-md-12 grid-margin'>
                {/* <div className='card'> */}
                    <div className='card-header d-block d-md-flex'>
                    <h5 class="mb-0">Loan Payments</h5>
                    {/* <p class="ml-auto mb-0">View all<i class="icon-bulb"></i></p> */}
                    </div>
                {/* </div> */}

            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table'>
                                    <tr class="thead-dark">
                                        <th>Client ID</th>
                                        <th> Amount </th>
                                        <th> Gateway </th>
                                        <th> Loan Date </th>
                                        <th> Paid at </th>
                                        <th> Status </th>
                                    </tr>
                                    <tbody style={{backgroundColor:'lightgray'}}>
                                        <tr>
                                            <td>
                                                <img src={face15} alt='image'/>
                                                <span className='pl-2'>Kelvin</span>
                                            </td>
                                            <td>$3621</td>
                                            <td>
                                                <img src={mpesa} alt='image'/>
                                                <span className='pl-2'>Mpesa</span>
                                            </td>
                                            <td>04 Jun 2019</td>
                                            <td>18 Jul 2019</td>
                                            <td>
                                                <div class="badge badge-success p-2">Paid</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={face1} alt='image'/>
                                                <span className='pl-2'>Kelvin</span>
                                            </td>
                                            <td>$3621</td>
                                            <td>
                                                <img src={mpesa} alt='image'/>
                                                <span className='pl-2'>Mpesa</span>
                                            </td>
                                            <td>04 Jun 2019</td>
                                            <td>18 Jul 2019</td>
                                            <td>
                                                <div class="badge badge-danger p-2">Arrears</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={face2} alt='image'/>
                                                <span className='pl-2'>Alice</span>
                                            </td>
                                            <td>$3621</td>
                                            <td>
                                                <img src={paypal} alt='image'/>
                                                <span className='pl-2'>Mpesa</span>
                                            </td>
                                            <td>04 Jun 2019</td>
                                            <td>18 Jul 2019</td>
                                            <td>
                                                <div class="badge badge-warning p-2">Pending</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={face3} alt='image'/>
                                                <span className='pl-2'>Alvin</span>
                                            </td>
                                            <td>$3621</td>
                                            <td>
                                                <img src={mpesa} alt='image'/>
                                                <span className='pl-2'>Mpesa</span>
                                            </td>
                                            <td>04 Jun 2019</td>
                                            <td>18 Jul 2019</td>
                                            <td>
                                                <div class="badge badge-success p-2">Paid</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={face15} alt='image'/>
                                                <span className='pl-2'>Kelvin</span>
                                            </td>
                                            <td>$3621</td>
                                            <td>
                                                <img src={mpesa} alt='image'/>
                                                <span className='pl-2'>Mpesa</span>
                                            </td>
                                            <td>04 Jun 2019</td>
                                            <td>18 Jul 2019</td>
                                            <td>
                                                <div class="badge badge-success p-2">Paid</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    

                    </table>
                </div>
                {/* <Pagination /> */}
            </div>
        </>
    );
};

export default ClientsPayments;