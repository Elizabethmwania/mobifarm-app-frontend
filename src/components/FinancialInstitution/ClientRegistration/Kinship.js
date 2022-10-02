import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';

export class Kinship extends Component {
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
                <p style={{fontWeight:600, paddingBottom:25}}>Kinship Details:</p>
                    <Form>
                        <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="kinFirstName">First Name</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('kinFirstName')}
                                    defaultValue={values.kinFirstName}
                                    />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="kinMiddleName">Middle Name</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('kinMiddleName')}
                                    defaultValue={values.kinMiddleName}
                                    />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="kinLastName">Last Name</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('kinLastName')}
                                    defaultValue={values.kinLastName}
                                    />
                                </div>
                        </div>
                        <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="kinEmail">Email</label>
                                    <input type="email" 
                                    class="form-control" 
                                    onChange={this.props.handleChange('kinEmail')}
                                    defaultValue={values.kinEmail} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="kinPhone">Phone</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('kinPhone')}
                                    defaultValue={values.kinPhone} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="kinIdNumber">ID Number</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('kinIdNumber')}
                                    defaultValue={values.kinIdNumber} />
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

export default Kinship;