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
import DealerLoginNav from './DealerLoginNav';

const DealerLogin = () => {
  const nav = useNavigate();
    // React States  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const database = [
    {
      username: "Dealer",
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
        nav("/dealers-dashboard");
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
        <DealerLoginNav />
        <div
          className="section section-image"
          style={{
            backgroundImage: "url(" + require("../../../img/login-image.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="mx-auto" lg="4" md="6">
                <Card className="card-register" style={{backgroundColor:'transparent', border:'1px solid white'}}>
                  <h3 className="title mx-auto">Offtaker Login</h3>
                  
                  <Form className="register-form" onSubmit={handleSubmit}>
                    <label>Account Name</label>
                    <InputGroup className="form-group-no-border">
                      <Input placeholder="Account Name" type="text" name='uname' required style={{height:'40px'}} />
                      {renderErrorMessage("uname")}
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="form-group-no-border">
                      <Input placeholder="Password" type="password" name='pass' required style={{height:'40px'}}/>
                      {renderErrorMessage("pass")}
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      type="submit"
                      style={{backgroundColor:'rgb(78, 231, 40)', border:'none'}}
                    >
                      LOGIN
                    </Button>
                  </Form>
                </Card>
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

export default DealerLogin;