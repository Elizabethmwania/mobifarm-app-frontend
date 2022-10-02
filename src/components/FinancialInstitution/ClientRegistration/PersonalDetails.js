import React, { Component } from 'react';
import { Form, Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';

export class PersonalDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values } = this.props;

        return (
            // <Col style={{ maxWidth: 450 }}>
            <>
            <p style={{fontWeight:600, paddingBottom:25}}>Personal Details:</p>        
                <Form>
                        <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="firstName">First Name</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('firstName')}
                                    defaultValue={values.firstName}
                                    />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="middleName">Middle Name</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('middleName')}
                                    defaultValue={values.middleName}
                                    />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="lastName">Last Name</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('lastName')}
                                    defaultValue={values.lastName}
                                    />
                                </div>
                        </div>
                        <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="email">Email</label>
                                    <input type="email" 
                                    class="form-control" 
                                    onChange={this.props.handleChange('email')}
                                    defaultValue={values.email} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="phone">Phone</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('phone')}
                                    defaultValue={values.phone} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="idNumber">ID Number</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('idNumber')}
                                    defaultValue={values.idNumber} />
                                </div>
                            </div>
                            <Button onClick={this.saveAndContinue}>Save And Continue</Button>
                   
                </Form>
                </>
        );
    }
}

export default PersonalDetails;