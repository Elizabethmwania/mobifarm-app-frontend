import React, { Component } from 'react';
import { Button, Card, List, ListGroupItem } from 'reactstrap';

export class Confirmation extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      }
    
      back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      }
    render() {
        const { values: { firstName, middleName, lastName, email, phone, idNumber,
                          country, county, ward, chain,
                          farmSize, farmCoordinates, soilType, income,startDate,
                          kinFirstName, kinMiddleName, kinLastName, kinEmail, kinPhone, kinIdNumber,
                          collateralItem, netValue
                        } } = this.props;

        return (
            <>
            <div>
            <p style={{textAlign:'center', fontSize:20, fontWeight: 600}}>Confirm to submit!</p>
            {/* <Card> */}
                <h5>Personal Details:</h5>
                <List>
                    <ListGroupItem>
                        First Name: {firstName}
                    </ListGroupItem>
                    <ListGroupItem>
                        Middle Name: {middleName}
                    </ListGroupItem>
                    <ListGroupItem>
                        Last Name: {lastName}
                    </ListGroupItem>
                    <ListGroupItem>
                        Email Address: {email}
                    </ListGroupItem>
                    <ListGroupItem>
                        Phone Number: {phone}
                    </ListGroupItem>
                    <ListGroupItem>
                        ID Number: {idNumber}
                    </ListGroupItem>
                </List>
                <h5>Residence:</h5>
                <List>
                    <ListGroupItem>
                        Country: {country}
                    </ListGroupItem>
                    <ListGroupItem>
                        County: {county}
                    </ListGroupItem>
                    <ListGroupItem>
                        Ward: {ward}
                    </ListGroupItem>
                    <ListGroupItem>
                        Value of Chain: {chain}
                    </ListGroupItem>
                </List>
                <h5>Farm Details:</h5>
                <List>
                    <ListGroupItem>
                        Farm Size: {farmSize}
                    </ListGroupItem>
                    <ListGroupItem>
                        Farm Coordinates: {farmCoordinates}
                    </ListGroupItem>
                    <ListGroupItem>
                        Soil Type : {soilType}
                    </ListGroupItem>
                    <ListGroupItem>
                        Source of Income: {income}
                    </ListGroupItem>
                    <ListGroupItem>
                        Start Date: {startDate}
                    </ListGroupItem>
                </List>
                <h5>Kinship Details:</h5>
                <List>
                    <ListGroupItem>
                        First Name: {kinFirstName}
                    </ListGroupItem>
                    <ListGroupItem>
                        Middle Name: {kinMiddleName}
                    </ListGroupItem>
                    <ListGroupItem>
                        Last Name: {kinLastName}
                    </ListGroupItem>
                    <ListGroupItem>
                        Email Address: {kinEmail}
                    </ListGroupItem>
                    <ListGroupItem>
                        Phone Number: {kinPhone}
                    </ListGroupItem>
                    <ListGroupItem>
                        ID Number: {kinIdNumber}
                    </ListGroupItem>
                </List>
                <h5>Collateral:</h5>
                <List>
                    <ListGroupItem>
                        Collateral Item: {collateralItem}
                    </ListGroupItem>
                    <ListGroupItem>
                        Net Value: {netValue}
                    </ListGroupItem>
                </List>
                </div>
            {/* </Card> */}
            <div class="form-row">
                 <Button onClick={this.back}>Back</Button> &nbsp; &nbsp; &nbsp;
                 <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
            </>
        );
    }
}

export default Confirmation;
