import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Axios from 'axios';
import NumberFormat from 'react-number-format';
const API_URL = 'http://localhost:8080/api';



export default class ProductList extends Component {

    constructor(props) {
        super(props);
        this.pageChanged = this.pageChanged.bind(this);
        this.searchProduct = this.searchProduct.bind(this);
    }

    state = {
        paging : {},
        productList : []
    }

    componentWillMount() {
        this.initialState = this.state;
    }

    componentDidMount(){
        const url = `${API_URL}/product/list/1/2`;
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

        const url = `${API_URL}/product/list/${pageNo}/2`;
        Axios.post(url)
            .then(response => response.data)
            .then((data) => {
                // this.setState(this.initialState);
                this.setState({ paging : data, productList :  data.docs})
                console.log(this.state.paging)
            })
    }

    searchProduct(){
        
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
            <Col>
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
                            <Button variant="primary">Details</Button>
                                &nbsp;
                            <Button variant="success">Add to cart</Button>
                        </span>
                    </Card.Body>
                </Card> 
            </Col>
        
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
                            <Breadcrumb.Item active>Products</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Find Your favourite products..." aria-describedby="basic-addon1" />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
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