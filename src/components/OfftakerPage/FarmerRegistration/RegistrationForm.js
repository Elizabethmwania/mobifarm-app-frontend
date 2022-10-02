import React from 'react';
import { Button } from 'reactstrap';

const RegistrationForm = () => {
    return (
        <div class="col-lg-12 grid-margin stretch-card" style={{ paddingTop:115 }}>
                {/* <div class="card"> */}
                    <div class="col-12 grid-margin">
                        <div class="card" style={{ border:'none', boxShadow:'none' }}>
                            <div class="card-body">
                                <h4 class="card-title" style={{color:'black'}}>Register Farmer</h4>
                                <form class="form-sample">
                                    <p class="card-description" style={{fontWeight:600}}> Personal info </p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">First Name:</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Last Name:</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Gender:</label>
                                                <div class="col-sm-9">
                                                    <select class="form-control" style={{border: '1px solid #ced4da'}}>
                                                        <option selected>Select</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Date of Birth:</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" placeholder="dd/mm/yyyy" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Category:</label>
                                                <div class="col-sm-9">
                                                    <select class="form-control" style={{border: '1px solid #ced4da'}}>
                                                        <option selected>Select</option>
                                                        <option>Category1</option>
                                                        <option>Category2</option>
                                                        <option>Category3</option>
                                                        <option>Category4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <p class="card-description" style={{fontWeight:600}}> Address </p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Address 1</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">State</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Address 2</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Postcode</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">City</label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label" >Country</label>
                                                <div class="col-sm-9">
                                                    <select class="form-control" style={{border: '1px solid #ced4da'}}>
                                                        <option selected>Select</option>
                                                        <option>America</option>
                                                        <option>Italy</option>
                                                        <option>Russia</option>
                                                        <option>Britain</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input class="btn btn-primary" type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
    );
};

export default RegistrationForm;