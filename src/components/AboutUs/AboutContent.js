import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Feature from '../LandingPage/Feature';
import Services from './Services';

const AboutContent = () => {
    return (
        <>
        {/* <div className='main'> */}
            <div className='section text-center'>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                        <h2 className="title">Who is Mobifarm?</h2>
                        <p className="description" style={{fontWeight:500}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum..
                        </p>
                        <br />
                        {/* <Button
                            className="btn-round"
                            color="info"
                            href=""
                            onClick={(e) => e.preventDefault()}
                        >
                            See Details
                        </Button> */}
                        </Col>
                    </Row>
                    <Feature />
                    {/* <Services /> */}
                </Container>
            </div>
        {/* </div>     */}
            
        </>
    );
};

export default AboutContent;