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
            <br/>
            <br/>
           <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2 className="title">Know more about Mobifarm</h2>
                  <h5 className="description">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                   et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                   aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                   deserunt mollit anim id est laborum..
                  </h5>
                  <br />
                  <Button
                    className="btn-round"
                    color="info"
                    href=""
                    onClick={(e) => e.preventDefault()}
                  >
                    See Details
                  </Button>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
    );
};

export default Feature;