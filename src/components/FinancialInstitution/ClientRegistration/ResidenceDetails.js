import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';

export class ResidenceDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
                <>
                <p style={{fontWeight:600, paddingBottom:25}}>Residence Details:</p>
                    <Form>
                        <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="firstNname">Country</label>
                                    <select 
                                    style={{border: '1px solid #ced4da'}}
                                    class="form-control" 
                                    onChange={this.props.handleChange('country')}
                                    defaultValue={values.country}
                                    >
                                        <option selected>Select...</option>
                                        <option>Kenya</option>
                                        <option>Uganda</option>
                                        <option>Tanzania</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="county">County</label>
                                    <select 
                                    style={{border: '1px solid #ced4da'}}
                                    class="form-control" 
                                    onChange={this.props.handleChange('county')}
                                    defaultValue={values.county}
                                    >
                                        <option selected>Select...</option>
                                        <option>Nairobi</option>
                                        <option>Kisumu</option>
                                        <option>Nakuru</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="firstNname">Ward</label>
                                    <select 
                                    style={{border: '1px solid #ced4da'}}
                                    class="form-control" 
                                    onChange={this.props.handleChange('ward')}
                                    defaultValue={values.ward}
                                    >
                                        <option selected>Select...</option>
                                        <option>ward1</option>
                                        <option>ward2</option>
                                        <option>ward3</option>
                                    </select>
                                </div>
                        </div>
                        <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="chain">Value of Chain</label>
                                    <select 
                                    style={{border: '1px solid #ced4da'}}
                                    class="form-control" 
                                    onChange={this.props.handleChange('chain')}
                                    defaultValue={values.chain}
                                    >
                                        <option selected>Select...</option>
                                        <option>chain1</option>
                                        <option>chain2</option>
                                        <option>chain3</option>
                                    </select>
                                </div>
                                </div>
                        <div class="form-row">
                        <Button onClick={this.back}>Back</Button> &nbsp; &nbsp; &nbsp;
                        <Button onClick={this.saveAndContinue}>Next</Button>
                        </div>
                    </Form>

                </>
        );
    }
}

export default ResidenceDetails;