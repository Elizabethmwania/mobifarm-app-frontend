import React from 'react';
import { Container, Row, Col, Button, UncontrolledTooltip } from 'reactstrap';

const Updated = () => {
    return (
        <Container className="text-center">
        <Row className="justify-content-md-center sharing-area text-center" style={{marginBottom:30}}>
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
    );
};

export default Updated;