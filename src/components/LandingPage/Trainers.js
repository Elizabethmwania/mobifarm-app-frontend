import React from 'react';
import { Container,Row,Col,Card,CardBody,CardTitle,CardFooter,Button } from 'reactstrap';
//images
import trainer1 from '../../img/trainers/trainer1.png';
import trainer2 from '../../img/trainers/trainer2.png';
import trainer3 from '../../img/trainers/trainer3.png';

const Trainers = () => {
    return (
        <div className='section text-center'>
            <Container>
                <h2 className='title'>Meet Our Trainers</h2>
            <Row>   
                <Col md="4">
                    <Card className="card-profile card-plain">
                    <div className="card-avatar">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                        <img
                            alt="..."
                            src={trainer1}
                        />
                        </a>
                    </div>
                    <CardBody>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                        <div className="author">
                            {/* <CardTitle> */}
                                <h5>Cate Michael</h5>  
                            {/* </CardTitle> */}
                            <h6 className="card-category">Poultry Farming</h6>
                        </div>
                        </a>
                        <p className="card-description text-center" style={{fontWeight:500}}>
                        Lorem ipsum dolor sit amet, consecte-tur adipiscing elit,
                        sed do eiusmod tem por incididunt.</p>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Button
                        className="btn-just-icon btn-neutral"
                        color="red"
                        href=""
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fa fa-twitter" />
                        </Button>
                        <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href=""
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fa fa-google-plus" />
                        </Button>
                        <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href=""
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fa fa-linkedin" />
                        </Button>
                    </CardFooter>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="card-profile card-plain">
                    <div className="card-avatar">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                        <img
                            alt="..."
                            src={trainer2}
                        />
                        </a>
                    </div>
                    <CardBody>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                        <div className="author">
                            {/* <CardTitle tag="h4"> */}
                                <h5>Grace Ford</h5>
                            {/* </CardTitle> */}
                            <h6 className="card-category">Farm Management</h6>
                        </div>
                        </a>
                        <p className="card-description text-center" style={{fontWeight:500}}>
                        Lorem ipsum dolor sit amet, consecte-tur adipiscing elit,
                        sed do eiusmod tem por incididunt.
                        </p>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Button
                        className="btn-just-icon btn-neutral"
                        color="link"
                        href=""
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fa fa-twitter" />
                        </Button>
                        <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href=""
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fa fa-google-plus" />
                        </Button>
                        <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href=""
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fa fa-linkedin" />
                        </Button>
                    </CardFooter>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="card-profile card-plain">
                    <div className="card-avatar">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                        <img
                            alt="..."
                            src={trainer3}
                        />
                        </a>
                    </div>
                    <CardBody>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                        <div className="author">
                            {/* <CardTitle tag="h4"> */}
                                <h5>Henry Ford </h5>
                            {/* </CardTitle> */}
                            <h6 className="card-category">Animal Keeping</h6>
                        </div>
                        </a>
                        <p className="card-description text-center" style={{fontWeight:500}}>
                        Lorem ipsum dolor sit amet, consecte-tur adipiscing elit,
                        sed do eiusmod tem por incididunt.
                        </p>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Button
                        className="btn-just-icon btn-neutral"
                        color="link"
                        href=""
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fa fa-twitter"/>
                        </Button>
                        <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fa fa-google-plus" />
                        </Button>
                        <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fa fa-linkedin" />
                        </Button>
                    </CardFooter>
                    </Card>
                </Col>
              </Row>
            </Container>
            
        </div>
    );
};

export default Trainers;