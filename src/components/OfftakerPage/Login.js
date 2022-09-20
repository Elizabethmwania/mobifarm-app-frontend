import React from 'react';
import LoginNavBar from './LoginNavBar';
import {
    Button,
    Card,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
import loginImage from '../../img/login-image.jpg';

const Login = () => {
    return (
    <>
      <LoginNavBar />  
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("../../img/login-image.jpg") + ")"
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Offtaker Login</h3>
                
                <Form className="register-form">
                  <label>Account Name</label>
                  <InputGroup className="form-group-no-border">
                    {/* <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon> */}
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    {/* <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon> */}
                    <Input placeholder="Password" type="password" />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    LOGIN
                  </Button>
                </Form>
                {/* <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div> */}
              </Card>
              {/* <div className="col text-center">
                <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  href="/register-page"
                  size="lg"
                  target="_blank"
                >
                  View Register Page
                </Button>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}
export default Login;