import React, { Component } from "react";
import {Jumbotron, Button, Container, Row, Col, Breadcrumb} from 'react-bootstrap';
import Axios from 'axios';
import NumberFormat from 'react-number-format';
const API_URL = 'http://localhost:8080/api';


export default class CartPage extends Component {


    render() {
        return (
          
            <Container>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

        );
      }

}