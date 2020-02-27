import React, { Component } from "react";
import { Card, Button, Breadcrumb, Container, Row, Col, Pagination, InputGroup, FormControl, Alert } from 'react-bootstrap';
import Axios from 'axios';
import NumberFormat from 'react-number-format';
import config from 'react-global-configuration';



export default class ProductList extends Component {

    constructor(props) {
        super(props);
        this.pageChanged = this.pageChanged.bind(this);
        this.onChangeSearchProduct = this.onChangeSearchProduct.bind(this);
        this.onClickSearchButton = this.onClickSearchButton.bind(this);
        this.onClickProductDetail = this.onClickProductDetail.bind(this);
        this.onClickAddToCart = this.onClickAddToCart.bind(this);
    }

    state = {
        paging : {},
        productList : [],
        searchProduct : '',
        prdDetailLink: '',
        cartAlert: <div></div>
    }

    componentWillMount() {
        this.initialState = this.state;
    }

    componentDidMount(){
        const url = `${config.get('apiurl')}/product/list/1/3`;
        Axios.post(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({ paging : data, productList :  data.docs})
                console.log(this.state.paging)
            })
    }

    pageChanged(e){
        console.log(e.target.text);
        let pageNo = parseInt(e.target.text);

        let search = this.state.searchProduct;
        let searchStr = '';
        if(search)
            searchStr = '?search='+search;

        console.log(searchStr);

        const url = `${config.get('apiurl')}/product/list/${pageNo}/3${searchStr}`;
        Axios.post(url)
            .then(response => response.data)
            .then((data) => {
                // this.setState(this.initialState);
                this.setState({ paging : data, productList :  data.docs})
                console.log(this.state.paging)
            })
    }

    onChangeSearchProduct(e){
        console.log(e.target.value);
        this.setState({searchProduct: e.target.value})
    }

    onClickSearchButton(){
        let search = this.state.searchProduct;
        let searchStr = '';
        if(search)
            searchStr = '?search='+search;

        console.log(searchStr);

        const url = `${config.get('apiurl')}/product/list/1/3${searchStr}`;
        Axios.post(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({ paging : data, productList :  data.docs})
                console.log(this.state.paging)
            })
    }

    onClickProductDetail(prdNo){
        console.log("prdNo: " + prdNo);
        this.setState({prdDetailLink : `/product/detail/${prdNo}`});
        this.props.history.push(`/product/detail/${prdNo}`);
    }

    onClickAddToCart(prdNo, prdName, prdPrice){

        if(!localStorage.getItem('loggedInUser')){
            this.setState({cartAlert : 
                <Alert variant="danger">
                    <Alert.Heading>You need to login!</Alert.Heading>
                </Alert>
            })
            return;
        }

        let cart = [];
        cart = !localStorage.getItem('cart') ? [] : JSON.parse(localStorage.getItem('cart'));
        
        cart.push({prdNo : prdNo, prdName : prdName, prdPrice : prdPrice, prdQty : 1});
        console.log(cart);

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(localStorage.getItem('cart'));
        alert(`${prdName} added to cart`)

    }
      

    render() {

        const totalPages = this.state.paging.totalPages;
        const currentPages = this.state.paging.page;
        let paginations = [];
        for (let number = 1; number <= totalPages; number++) {
            paginations.push(
              <Pagination.Item key={number} active={number === currentPages}>
                {number}
              </Pagination.Item>,
            );
        }

        const productList = this.state.productList.map((prd, idx) => 
            <Col key={idx}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prd.image} />
                    <Card.Body>
                        <Card.Title>
                            <NumberFormat value={prd.price} displayType={'text'} thousandSeparator={true} prefix={'IDR '} />
                        </Card.Title>
                        <Card.Text>
                            {prd.desc}
                        </Card.Text>
                        <span>
                            <Button onClick={(prdNo) => this.onClickProductDetail(`${prd.prdNo}`)} variant="primary" >Details</Button>
                                &nbsp;
                            <Button onClick={(prdNo, prdName, prdPrice) => this.onClickAddToCart(`${prd.prdNo}`, `${prd.name}`, `${prd.price}`)} variant="success">Add to cart</Button>
                        </span>
                    </Card.Body>
                </Card> 
            </Col>
        
        );

        // const addCartAlert = this.state.cartAlert;

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
                            <Breadcrumb.Item active>Products</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <InputGroup className="mb-3">
                        <FormControl onChange={this.onChangeSearchProduct} placeholder="Find Your favourite products..." aria-describedby="basic-addon1" />
                        <InputGroup.Append>
                            <Button onClick={this.onClickSearchButton} variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {this.state.cartAlert}
                    </Col>
                </Row>

                <Row>
                    {productList}
                </Row>

                <Row>
                    <Col>&nbsp;</Col>
                </Row>

                <Row>
                    <Col>&nbsp;</Col>
                    <Col>
                        <Pagination onClick={this.pageChanged}>{paginations}</Pagination>
                    </Col>
                </Row>
            </Container>

            

            



        );
    }

}