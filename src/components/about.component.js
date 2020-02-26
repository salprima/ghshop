import React, { Component } from "react";
import {Accordion, Card, Button, Container, Row, Col, Breadcrumb} from 'react-bootstrap';

export default class AboutPage extends Component {

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
                        <Breadcrumb.Item active>About</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>

                <Accordion>
                    <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        10 Movies to know me
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p style={{textAlign: 'left'}}>
                                <ol>
                                    <li>The Lord of The Rings</li>
                                    <li>How to Train Your Dragon</li>
                                    <li>Toy Story</li>
                                    <li>The Book of Eli</li>
                                    <li>The Equalizer</li>
                                    <li>The Matrix</li>
                                    <li>Sherlock Holmes</li>
                                    <li>PK</li>
                                    <li>Life of Pi</li>
                                    <li>My Name Is Khan</li>
                                </ol>
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Inspiring Quotes 
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p style={{textAlign: 'left'}}>
                                <ul>
                                    <li>The cure for ignorance is to question - Prophet Muhammad PBUH</li>
                                    <li>If I fail, I try again, and again, and again... - Nick Vujicic</li>
                                    <li>I code You, Like I Love You - Sal Prima</li>
                                    <li>Appear weak when you are strong, and strong when you are weak. - Sun Tzu</li>
                                    <li>Focus on Your service, Money will follow - Unknown</li>
                                    <li>Better to save the mystery, than surrender to the secret - Dream Theater</li>
                                    <li>Never Settle - OnePlus</li>
                                    <li>The more You lie, The quicker You die - Unknown</li>
                                    <li>Love your family, work super hard, live your passion. - Gary Vaynerchuk </li>
                                    <li>People don't buy what you do; they buy why you do it. And what you do simply proves what you believe - Simon Sinek, Start with WHY</li>
                                </ul>
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                    </Card>
                </Accordion>

                </Col>
            </Row>
        </Container>

       

    );
  }

}