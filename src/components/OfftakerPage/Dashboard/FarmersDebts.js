import React from 'react';
import Pagination from '../../Common/Pagination';

const FarmersDebts = () => {
    return (
        <div className='card-body'>
            <h4 className='card-title'>Farmers Debts</h4>
            <div className='table-responsive'>
                <table className='table table-light'>
                    <tr>
                        <th> # </th>
                        <th> First name </th>
                        <th> Progress </th>
                        <th> Amount </th>
                        <th> Deadline </th>

                    </tr>
                    <tbody>
                        <tr>
                            <td> 1 </td>
                            <td> Herman Beck </td>
                            <td> 
                                <div className='progress'>
                                    <div className='progress-bar bg-success' role='progressbar' aria-valuenow='25' aria-valuemin='0'
                                     aria-valuemax='100' style={{width:'70%'}}>
                                    </div>
                                </div>
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2023</td>
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td> Messy Adam </td>
                            <td> 
                                <div className='progress'>
                                    <div className='progress-bar bg-danger' role='progressbar' aria-valuenow='25' aria-valuemin='0'
                                     aria-valuemax='100' style={{width:'80%'}}>
                                    </div>
                                </div>
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2023</td>
                        </tr>
                        <tr>
                            <td> 3 </td>
                            <td> Luck Ritah </td>
                            <td> 
                                <div className='progress'>
                                    <div className='progress-bar bg-primary' role='progressbar' aria-valuenow='50' aria-valuemin='0'
                                     aria-valuemax='100' style={{width:'50%'}}>
                                    </div>
                                </div>
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2023</td>
                        </tr>
                        <tr>
                            <td> 4 </td>
                            <td> John Richards </td>
                            <td> 
                                <div className='progress'>
                                    <div className='progress-bar bg-warning' role='progressbar' aria-valuenow='90' aria-valuemin='0'
                                     aria-valuemax='100' style={{width:'90%'}}>
                                    </div>
                                </div>
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pagination />
        </div>
    );
};

export default FarmersDebts;