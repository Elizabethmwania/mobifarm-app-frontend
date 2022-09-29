import React from 'react';
import { Container, Row, Col, Button, UncontrolledTooltip } from 'reactstrap';

const Enroll = () => {
    return (
        <>
        <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">How you benefit</h2>
              <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="danger"
                href=""
                target="_blank"
              >
                Join Today!
              </Button>
            </Col>
          </Row>
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Want to know more?</h2>
              <p className="description">
              Lorem ipsum dolor sit amet{" "}
                <a className="text-danger" href="">
                  Mobifarm
                </a>
                . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              {/* <Button className="btn-round" color="info" href="#pablo" disabled>
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Upgrade to PRO
              </Button> */}
            </Col>
          </Row>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Be updated!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href=""
                id="tooltip3373767"
                onClick={(e) => e.preventDefault()}
              >
                <i className="mdi mdi-twitter" /> Twitter
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="google-bg"
                href=""
                id="tooltip840791273"
                onClick={(e) => e.preventDefault()}
              >
                <i className="mdi mdi-google-plus" /> Google
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                Share!
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href=""
                id="tooltip68961360"
                onClick={(e) => e.preventDefault()}
              >
                <i className="mdi mdi-facebook" /> Facebook
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Share!
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                color="instagram-bg"
                href=""
                target="_blank"
                id="tooltip864353654"
              >
                <i className="mdi mdi-instagram" /> Instagram
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Follow
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
            
        </>
    );
};

export default Enroll;