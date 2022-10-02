import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Button, Col } from 'reactstrap';
const More = () => {
    return (
        <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Know more about Mobifarm</h2>
                  <p className="description" style={{fontWeight:500}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                   et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                   aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                   deserunt mollit anim id est laborum..
                  </p>
                  <br />
                  <Button
                    className="btn-round"
                    color="info"
                    to="/about" tag={Link}
                  >
                    See Details
                  </Button>
                </Col>
            </Row>
    );
};

export default More;