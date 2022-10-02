import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './offstyle.css';
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
import AdminLoginNav from './AdminLoginNav';

const AdminLogin = () => {
  const nav = useNavigate();
    // React States  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const database = [
    {
      username: "Admin",
      password: "123456789"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        nav("/admin-dashboard");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
   };

   // Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const renderForm = (
        <>
        <AdminLoginNav />
        <div
          className="section section-image section-login"
          style={{
            backgroundImage: "url(" + require("../../../img/login-image.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="mx-auto" lg="4" md="6">
                <Card className="card-register" style={{backgroundColor:'#FF8F5E'}}>
                  <h3 className="title mx-auto">Admin Login</h3>
                  
                  <Form className="register-form" onSubmit={handleSubmit}>
                    <label>Account Name</label>
                    <InputGroup className="form-group-no-border">
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input placeholder="Account Name" type="text" name='uname' required />
                      {renderErrorMessage("uname")}
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="form-group-no-border">
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon> */}
                      <Input placeholder="Password" type="password" name='pass' required />
                      {renderErrorMessage("pass")}
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      type="submit"
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
  
    return (
        <div className="">
            <div className="">
             {/* <div className="title">Sign In</div> */}
             {isSubmitted ? 
                <></>
             : renderForm
             }
            </div>
        </div>
    );
};

export default AdminLogin;