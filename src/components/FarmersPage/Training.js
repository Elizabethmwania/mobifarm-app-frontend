import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import image1 from '../../img/other/module1.jpg';
// import face1 from '../../img/faces/face15.jpg';

const Training = () => {
    return (
        <div id="images">
          <Container>
          <div className="typography-line">
              <h3>
                Training Categories <br />
              </h3>
            </div>
            <Row>
              <Col md="3" sm="6">
                <h4 className="images-title">Livestock Keeping</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../img/other/module1.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("../../img/faces/face15.jpg")}
                    />
                  </div>
                  <p>By Evans</p>
                </div>
              </Col>
              <Col  className = "mr-auto ml-auto" md="3" sm="6">
                <h4 className="images-title">Crop Farming</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../img/other/module1.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("../../img/faces/face15.jpg")}
                    />
                  </div>
                  <p>By Green</p>
                </div>
              </Col>
              <Col className="mr-auto" md="3" sm="6">
                <h4 className="images-title">Horticulre</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../img/other/module1.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("../../img/faces/face15.jpg")}
                    />
                  </div>
                  <p>By Kevin</p>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
    );
};

export default Training;