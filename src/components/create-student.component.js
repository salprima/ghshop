import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateStudent extends Component {


    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeRollNo = this.onChangeRollNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          email: '',
          rollno: ''
        }
      }
    
      onChangeName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeRollNo(e) {
        this.setState({rollno: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        console.log(`Student successfully created!`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Roll no: ${this.state.rollno}`);
    
        this.setState({name: '', email: '', rollno: ''})
      }
    


  render() {
    return (
        <div className="form-wrapper">
            <Form>
            <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
    
            <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>
    
            <Form.Group controlId="RollNo">
                <Form.Label>Roll No</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
    
            <Button variant="danger" size="lg" block="block" type="submit">
                Create Student
            </Button>
            </Form>
        </div>
    );
  }
}