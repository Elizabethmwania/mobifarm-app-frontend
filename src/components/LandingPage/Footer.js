import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='footer footer-black footer-white'>
            <Container>
                <Row>
                    <nav className='footer-nav'>
                      {/* <Col md='4'> */}
                        <ul>
                            <li>
                                <a href='#' target='blank'>Home</a>
                            </li>
                            <li>
                                <a href='#' target='blank'>Home</a>
                            </li>
                            <li>
                                <a href='#' target='blank'>Home</a>
                            </li>
                        </ul>
                      {/* </Col>           */}
                    </nav>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;