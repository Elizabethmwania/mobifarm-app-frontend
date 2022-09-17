import React from 'react';
//style
import 'bootstrap/scss/bootstrap.scss'
import '../../assets/scss/paper-kit.scss?v=1.3.0';
import '../../assets/demo/demo.css?v=1.3.0';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import Header from './Header';

const LandingIndex = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
    <Header />
    <div className='main'>
      <div className='section text-center'>
        <Container>
          <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2 className="title">Let's talk about Mobifarm</h2>
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
              <br/>
              <br/>

        </Container>
      </div>
    </div>
    </>
  );
};

export default LandingIndex;