import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col, Breadcrumb, Alert } from 'react-bootstrap';

export default class ThanksPage extends Component {




    render() {
        return (
            <Container>
                <Row>
                    <Col><h1>Terima Kasih - Thank You - Благодаря ти</h1></Col>
                </Row>
                <Row>
                    <Col><img height='522' width='460' src='https://www.netclipart.com/pp/m/232-2323549_agnes-unicorn-despicableme-freetoedit-happy-agnes-despicable-me.png'/></Col>
                </Row>
            </Container>
        );
    }

}