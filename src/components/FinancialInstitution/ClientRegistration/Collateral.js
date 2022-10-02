import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';

export class Collateral extends Component {
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
                 <p style={{fontWeight:600, paddingBottom:25}}>Collateral:</p>
                    <Form>
                        <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="collateralItem">Collateral Item</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('collateralItem')}
                                    defaultValue={values.collateralItem}
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="netValue">Net Value</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('netValue')}
                                    defaultValue={values.netValue}
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

export default Collateral;