import React, { Component } from "react";
import {ListGroup, Container, Row, Col, Breadcrumb} from 'react-bootstrap';
import Axios from 'axios';
import NumberFormat from 'react-number-format';
const API_URL = 'http://localhost:8080/api';


export default class CartPage extends Component {

    constructor(props) {
        super(props);
        // this.pageChanged = this.pageChanged.bind(this);
        // this.onChangeSearchProduct = this.onChangeSearchProduct.bind(this);
        // this.onClickSearchButton = this.onClickSearchButton.bind(this);
        // this.onClickProductDetail = this.onClickProductDetail.bind(this);
    }

    state = {
        cart : []
    }

    componentWillMount() {
        this.initialState = this.state;
        let loggedInUser = localStorage.getItem('loggedInUser');
        if(!loggedInUser)
            this.props.history.push('/signin');

        this.setState({cart : !localStorage.getItem('cart') ? [] : JSON.parse(localStorage.getItem('cart'))})
    }

    render() {

        const cartList = this.state.cart.map((item, idx) => 
            <ListGroup.Item>{item.prdName} - {item.prdPrice}</ListGroup.Item>
        );

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
                <Row>
                    <Col>
                    <ListGroup>
                        {cartList}
                    </ListGroup>
                    </Col>
                </Row>
            </Container>

        );
      }

}