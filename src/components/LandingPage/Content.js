import React from 'react';
import training from '../../img/features/feature-2.png'
import { Button, Container, Row, Col } from "reactstrap";
const Content = () => {
    return (
      <div className="section text-center section-dark">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Training modules</h2>
              <br />
              <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tem por incididunt ut labore et dolore mag 
              na aliqua. Class aptent taciti sociosqu ad litora torquent per 
              conubia nostra, per inceptos himenaeos. Suspendisse potenti. 
              Ut gravida mattis magna, non varius lorem sodales nec. In libero 
              orci, ornare non nisl.
              </p>
              <br />
              <Button
                className="btn-round"
                color="info"
                target="_blank"
              >
                Explore All
              </Button>
            </Col>
            <Col lg="6" md="12">
            <div className="icons-container">
            <img src={training} height="300" width="300"/>
            </div>
                
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Content;