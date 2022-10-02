import React, { Component } from 'react';
import { Collateral } from './Collateral';
import { Confirmation } from './Confirmation';
import { FarmDetails } from './FarmDetails';
import { Kinship } from './Kinship';
import { PersonalDetails } from './PersonalDetails';
import { ResidenceDetails } from './ResidenceDetails';
import { Success } from './Success';

export class MainForm extends Component {
    state = {
        step: 1,
        // personal details
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        idNumber: '',
        age: '',
        city: '',
        // residence details
        country: '',
        county: '',
        ward: '',
        chain: '',
        // farm details
        farmSize: '',
        farmCoordinates: '',
        soilType: '',
        startDate: '',
        income: '',
        //KInship details
        kinFirstName: '',
        kinMiddleName: '',
        kinLastName: '',
        kinIdNumber: '',
        kinEmail: '',
        kinPhone: '',
        // collateral details
        collateralItem: '',
        netValue: '',

    }
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({[input]: event.target.value})
    }
    render() {
        const { step } = this.state;

        const { firstName, middleName, lastName, email, phone, idNumber,
                country, county, ward, chain,
                farmSize, farmCoordinates, soilType, income, startDate,
                kinFirstName, kinMiddleName, kinLastName, kinEmail, kinPhone, kinIdNumber,
                collateralItem, netValue
            
            } = this.state;

        const values = { firstName, middleName, lastName, email, phone, idNumber,
                          country, county, ward, chain,
                          farmSize, farmCoordinates, soilType, income, startDate,
                          kinFirstName,kinMiddleName, kinLastName, kinEmail, kinPhone, kinIdNumber,
                          collateralItem, netValue
                        
                        };

        switch(step) {
            case 1:
                return <PersonalDetails 
                        nextStep={this.nextStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 2:
                return <ResidenceDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 3:
                return <FarmDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        /> 
            case 4:
                return <Kinship
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />   
            case 5:
                return <Collateral
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />                                 
            case 6:
                return <Confirmation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
            case 7:
                return <Success />
        }
        // return (
        //     <div>
                
        //     </div>
        // );
    }
}

export default MainForm;