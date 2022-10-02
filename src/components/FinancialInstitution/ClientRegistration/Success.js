import React, { Component } from 'react';
import { Row } from 'reactstrap';
import img from '../../../img/gateway/check.png';
export class Success extends Component {
    render() {
        return (
            <Row style={{height:165, textAlign:'center'}}>
               <p>Registration successiful &nbsp; &nbsp;
               <img src={img} style={{height:40, width:40}}/>
               </p>
            </Row>
        );
    }
}

export default Success;