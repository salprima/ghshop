import React, { Component } from "react";
import {Jumbotron, Button, Container, Row, Col, Breadcrumb} from 'react-bootstrap';
import Axios from 'axios';
import NumberFormat from 'react-number-format';
import config from 'react-global-configuration';

export default class ProductDetailPage extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        prdNo : this.props.match.params.prdno,
        product : {}
    }

    componentDidMount(){
        const url = `${config.get('apiurl')}/product/${this.state.prdNo}`;
        Axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({ product : data})
                console.log(this.state.product)
            })
    }

    render() {

        const prd = this.state.product;

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
                            <Breadcrumb.Item href="/product-list">Products</Breadcrumb.Item>
                            <Breadcrumb.Item active>{prd.name}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbotron>
                        <h3>{prd.name}</h3>
                        <p>
                            <img
                                src={prd.image}
                                alt={prd.name}
                            />
                        </p>
                        </Jumbotron>
                    
                    </Col>
                    <Col>

                        <Jumbotron>
                            <h2><NumberFormat value={prd.price} displayType={'text'} thousandSeparator={true} prefix={'IDR '} /></h2>
                            <p>{prd.desc}</p>
                            <p>
                                <Button variant="success">Add to Cart</Button>
                            </p>
                        </Jumbotron>

                    </Col>
                </Row>
            </Container>

            

        );
    }

}