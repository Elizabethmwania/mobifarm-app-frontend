import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';

export class FarmDetails extends Component {
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
                <p style={{fontWeight:600, paddingBottom:25}}>Farm Details:</p>
                    <Form>
                        <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="farmSize">Farm Size</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('farmSize')}
                                    defaultValue={values.farmSize}
                                    />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="farmCoordinates">Farm Coordinates</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('farmCoordinates')}
                                    defaultValue={values.farmCoordinates}
                                    />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="soilType">Soil Type</label>
                                    <select 
                                    style={{border: '1px solid #ced4da'}}
                                    class="form-control" 
                                    onChange={this.props.handleChange('soilType')}
                                    defaultValue={values.soilType}
                                    >
                                        <option selected>Select...</option>
                                        <option>Type1</option>
                                        <option>Type2</option>
                                        <option>Type3</option>
                                    </select>
                                </div>
                        </div>
                        <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="income">Source of Income</label>
                                    <select 
                                    style={{border: '1px solid #ced4da'}}
                                    class="form-control" 
                                    onChange={this.props.handleChange('income')}
                                    defaultValue={values.income}
                                    >
                                        <option selected>Select...</option>
                                        <option>Employment</option>
                                        <option>Business</option>
                                        <option>Investment</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="startDate">Start Date</label>
                                    <input 
                                    type='date'
                                    class="form-control" 
                                    onChange={this.props.handleChange('startDate')}
                                    defaultValue={values.startDate}
                                    />
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

export default FarmDetails;