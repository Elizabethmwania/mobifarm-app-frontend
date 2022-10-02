import React from 'react';
//imges
import feature1 from '../../img/features/feature-1.png';
import feature2 from '../../img/features/feature-2.png';
import feature3 from '../../img/features/feature-3.png';
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import More from './More';
const Feature = () => {
    return (
      <div className='main'>
      <div className='section text-center'>
        <Container>
           <Row>
              <h2 className="title">What we do</h2>
              <Col md="3">
               <div className="info">
                  <div className="icon icon-info">
                    <img src={feature1} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Register</h4>
                    <p className="description" style={{fontWeight:500}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img src={feature2} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Train</h4>
                    <p style={{fontWeight:500}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img src={feature3} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Loan</h4>
                    <p style={{fontWeight:500}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                  <img src={feature2} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Market</h4>
                    <p style={{fontWeight:500}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                  </div>
                </div>
              </Col>
           </Row>
            <br/>
            <br/>
           <More />
        </Container>
      </div>
    </div>
    );
};

export default Feature;