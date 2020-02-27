import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import config from 'react-global-configuration';
import configuration from './config';

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import CreateStudent from "./components/create-student.component";
// import EditStudent from "./components/edit-student.component";
// import StudentList from "./components/student-list.component";
import ProductList from "./components/product-list.component";
import ProductDetailPage from "./components/product-detail.component";
import IndexPage from "./components/index.component";
import LoginPage from "./components/login.component";
import LogoutPage from "./components/logout.component";
import CartPage from "./components/cart.component";
import AboutPage from "./components/about.component";
import ThanksPage from "./components/thanks.component";

// import { isLoggedIn } from "./util/auth.util";

function App() {

  config.set(configuration);

  const isLoggedIn = !localStorage.getItem('loggedInUser');
  const loginLink = isLoggedIn ? 
        <Nav>
        <Link to={"/signin"} className="nav-link">
          Login
        </Link>
        </Nav>
        :
        <Nav>
        <Link to={"/signout"} className="nav-link">
        Logout
        </Link>
        </Nav>
        ;
    

  return (
  
  <Router>
    <div className="App">

        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                GH Aweshop
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/product-list"} className="nav-link">
                  Products
                </Link>
              </Nav>

              <Nav>
                <Link to={"/cart"} className="nav-link">
                  Cart
                </Link>
              </Nav>

              <Nav>
                {loginLink}
              </Nav>

            </Nav>

          </Container>
        </Navbar>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={IndexPage} />
                <Route path="/product-list" component={ProductList} />
                <Route path="/signin" component={LoginPage} />
                <Route path="/signout" component={LogoutPage} />
                <Route path="/product/detail/:prdno" component={ProductDetailPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/thanks" component={ThanksPage} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  </Router>
  
  );
}

export default App;