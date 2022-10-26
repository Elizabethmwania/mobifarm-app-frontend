import React, { useState } from 'react';
import LoginNavBar from './LoginNavBar';

import { useNavigate } from 'react-router-dom';
//import './offstyle.css';
import {
    Button,
    Card,
    Form,
    Input,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

const Login = () => {
  const nav = useNavigate();
    // React States  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const database = [
    {
      username: "Offtaker",
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
        nav("/offtaker-dashboard");
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
      <LoginNavBar />  
      <div
        className="section section-image"
        style={{
          backgroundImage: "url(" + require("../../../img/login-image.jpg") + ")"
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register ml-auto mr-auto" style={{backgroundColor:'transparent', border:'1px solid white'}}>
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
                    style={{backgroundColor:'rgb(78, 231, 40)'}}
                    type="submit"
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
}
export default Login;