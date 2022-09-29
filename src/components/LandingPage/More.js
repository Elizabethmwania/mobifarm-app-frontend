import React from 'react';
import { Row, Button, Col } from 'reactstrap';
const More = () => {
    return (
        <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2 className="title">Know more about Mobifarm</h2>
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
    );
};

export default More;