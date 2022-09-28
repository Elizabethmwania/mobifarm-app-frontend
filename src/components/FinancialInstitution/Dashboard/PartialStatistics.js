import React from 'react';

const PartialStatistics = () => {
    return (
        <div class="row">
                        <div class="col-md-4 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Loans per Month</h4>
                                    <div class="aligner-wrapper">
                                        <canvas id="transaction-history" style={{height:210}}
                                            class="transaction-chart"></canvas>
                                        <div
                                            class="wrapper d-flex flex-column justify-content-center absolute absolute-center">
                                            <h2 class="text-center mb-0 font-weight-bold">$800,234</h2>
                                            <small
                                                class="d-block text-center text-muted  font-weight-semibold mb-0">Total
                                                Loans</small>
                                        </div>
                                    </div>
                                    <div class="wrapper mt-4 d-flex flex-wrap align-items-cente">
                                        <div class="d-flex">
                                            <div class="preview-icon bg-success">
                                                <form type="check"></form>
                                            </div>
                                            <p class="mb-0 ml-2">Approved</p>
                                        </div>
                                        <div class="d-flex">
                                            <span class="square-indicator bg-warning ml-2"></span>
                                            <p class="mb-0 ml-2">Pending</p>
                                        </div>
                                        <div class="d-flex">
                                            <span class="square-indicator bg-danger ml-2"></span>
                                            <p class="mb-0 ml-2">Overdue</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between mb-4">
                                        <h4 class="card-title">Loans Statistics</h4>
                                        <div class="form-group mb-0">
                                            <label for="barChartFilter" class="sr-only">Filter revenue</label>
                                            <select class="custom-select" id="barChartFilter">
                                                <option disabled>Filter revenue</option>
                                                <option>Daily</option>
                                                <option>Weekly</option>
                                                <option selected>Monthly</option>
                                                <option>Quarterly</option>
                                            </select>
                                        </div> 
                                    </div> 
                                    <canvas id="barChart" style={{height:230}}></canvas>
                                </div>

                            </div>
                        </div>
                    </div>
    );
};

export default PartialStatistics;