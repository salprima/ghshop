import React, { Component } from "react";
import { Container, Row, Col, Alert } from 'react-bootstrap';

export default class LogoutPage extends Component {

    componentDidMount(){
        localStorage.removeItem('loggedInUser');

        if(!localStorage.getItem('logoutReload')){
            window.location.reload();
            localStorage.setItem('logoutReload', true);
        }
    }

    componentWillUnmount(){
        localStorage.removeItem('logoutReload');
    }

    render() {
        return (


            <Container>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>
                        <Alert variant='success'>
                            Logout success.
                        </Alert>
                    </Col>
                </Row>
            </Container>


        );
    }
}