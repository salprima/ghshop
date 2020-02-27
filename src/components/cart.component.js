import React, { Component } from "react";
import {ListGroup, Container, Row, Col, Breadcrumb, Button} from 'react-bootstrap';

export default class CartPage extends Component {

    constructor(props) {
        super(props);
        this.onClickEmptyCart = this.onClickEmptyCart.bind(this);
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

    componentDidMount(){

        if(!localStorage.getItem('cartReload')){
            window.location.reload();
            localStorage.setItem('cartReload', true);
        }

        // this.setState({reloaded: true});
    }

    onClickEmptyCart(){
        localStorage.removeItem('cart');
        window.location.reload();
    }

    componentWillUnmount(){
        localStorage.removeItem('cartReload');
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
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                    <Col><Button onClick={() => this.onClickEmptyCart()} variant="danger">Empty cart</Button></Col>
                </Row>
            </Container>

        );
      }

}