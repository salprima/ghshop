import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

export default class LoginPage extends Component {


    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            error: false
        }
    }

    componentWillMount(){
        let loggedInUser = localStorage.getItem('loggedInUser');
        if(loggedInUser)
            return (<Redirect to="/"/>)
            // this.props.history.push('/');
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    onChangePassword(e) {
        this.setState({password: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
    
        console.log(`Loging in...`);
        console.log(`Username: ${this.state.username}`);
        console.log(`Password: ${this.state.password}`);
    
        this.setState({username: '', password: ''});

        const { username, password } = this.state;
        const { history } = this.props;

        if (!(username === 'alex' && password === '123')) {
            return this.setState({ error: true });
        }

        localStorage.setItem('loggedInUser', username);
        this.props.history.push('/');
    }



    render() {

        let warning = (error) => {
            if(error)
                return (
                    <Alert variant='danger'>
                        Invalid credential!
                    </Alert>
                )
        };

    return (


        <Container>
        <Row>
            <Col>&nbsp;</Col>
            <Col>&nbsp;</Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>

            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Username">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control onChange={this.onChangeUsername} type="text" placeholder="Username" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
            
                <Form.Group controlId="Password">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control onChange={this.onChangePassword} type="password" placeholder="Password" />
                </Form.Group>

                {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                {warning(this.state.error)}

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            </Col>
            <Col></Col>
        </Row>
        </Container>

    );
  }
}