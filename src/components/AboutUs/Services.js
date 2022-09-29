import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import feature1 from '../../img/features/feature-1.png';
import feature2 from '../../img/features/feature-2.png';
import feature3 from '../../img/features/feature-3.png';

const Services = () => {
    return (
       
            <Row>
              <h2 className="title">What we do</h2>
              <Col md="3">
               <div className="info">
                  <div className="icon icon-info">
                    <img src={feature1} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Register</h4>
                    <p className="description">
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
                    <p>
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
                    <p>
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
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                  </div>
                </div>
              </Col>
           </Row>
         
    );
};

export default Services;