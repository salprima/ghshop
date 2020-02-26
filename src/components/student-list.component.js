import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class StudentList extends Component {

  render() {
    return (

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://dummyimage.com/268x180/fff3cd/856404.png&text=Duffle+Bag" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    );
  }

}