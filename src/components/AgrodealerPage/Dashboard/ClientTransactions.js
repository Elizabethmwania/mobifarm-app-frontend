import React from 'react';
import face1 from '../../../img/faces/face1.jpg'
import face2 from '../../../img/faces/face2.jpg'
import face3 from '../../../img/faces/face3.jpg'
import face15 from '../../../img/faces/face15.jpg'


const ClientTransactions = () => {
    return (
        <>
        <div className='row'>
            <h4>Clients Transactions</h4>
            <ul class="navbar-nav w-200" >
                    <li class="nav-item w-100">
                        <form class="form">
                            <input type="text" class="form-control" placeholder="Search here..." />
                        </form>
                    </li>
            </ul>  
        </div>
        <div className='row'>
            <div className='col-md-12 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='table-responsive'>
                            <table className='table table-light'>
                                {/* <thread> */}
                                    <tr>
                                        <th>
                                            <div className='form-check form-check-muted m-0'>
                                                <label className='form-check-label'>All</label>
                                                <input type="checkbox" className="form-check-input" onchange="checkAll(this)" name="chk[]" />
                                            </div>
                                        </th>
                                        <th> Client Name</th>
                                        <th> Order No </th>
                                        <th> Loan Item </th>
                                        <th> Quantity </th>
                                        <th> Payment </th>
                                        <th> Start Date </th>
                                        <th> Payment Status </th>
                                    </tr>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='form-check form-check-muted m-0'>
                                                    <label className='form-check-label'>
                                                        <input type="checkbox" className="form-check-input" />
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <img src={face15} alt='image'/>
                                                <span className='pl-2'>Kelvin</span>
                                            </td>
                                            <td> 023123 </td>
                                            <td> $14,000 </td>
                                            <td> Dashboard </td>
                                            <td> Credit Card </td>
                                            <td> 04 Dec 2019 </td>
                                            <td>
                                                <div className='badge badge-outline-success'> Approved </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='form-check form-check-muted m-0'>
                                                    <label className='form-check-label'>
                                                        <input type="checkbox" className="form-check-input" />
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <img src={face15} alt='image'/>
                                                <span className='pl-2'>Kelvin</span>
                                            </td>
                                            <td> 023123 </td>
                                            <td> $14,000 </td>
                                            <td> Dashboard </td>
                                            <td> Credit Card </td>
                                            <td> 04 Dec 2019 </td>
                                            <td>
                                                <div className='badge badge-outline-success'> Approved </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='form-check form-check-muted m-0'>
                                                    <label className='form-check-label'>
                                                        <input type="checkbox" className="form-check-input" />
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <img src={face15} alt='image'/>
                                                <span className='pl-2'>Kelvin</span>
                                            </td>
                                            <td> 023123 </td>
                                            <td> $14,000 </td>
                                            <td> Dashboard </td>
                                            <td> Credit Card </td>
                                            <td> 04 Dec 2019 </td>
                                            <td>
                                                <div className='badge badge-outline-success'> Approved </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                {/* </thread> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};

export default ClientTransactions;