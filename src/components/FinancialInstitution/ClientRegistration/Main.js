import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'reactstrap';
import AdminNav from '../Dashboard/AdminNav';
import { MainForm } from './MainForm';
import Footer from '../../Common/Footer';

const formStyles = {
    header:{
        textAlign: 'center',
        paddingTop: '5vh',
        color: 'rgb(62, 65, 62)',
    },
    main: {
        backgroundColor: '#e8ecf1',
        marginTop: '50px',
        padding: '10vh',
    },
    p : {
        fontWeight: 600,
    }

};
class Main extends Component {
    render() {
        return (
            <>
            <AdminNav />
            <div className='section landing-section'>
                <Container>
                    <Row>
                    <h3 className="text-center" style={formStyles.header} > Farmer Registration</h3>
                        
                        <Col className="main-content ml-auto mr-auto" md="8" style={formStyles.main}>
                        <MainForm />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
            
            </>
        );
    }
}

export default Main;