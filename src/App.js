import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form , Container} from 'react-bootstrap';
function App() {
  return (
    <Container >
<Form>
    <Form.Group controlId="formBasicTicket">
      <Form.Label>ZendeskTicket</Form.Label>
      <Form.Control type="text" placeholder="Enter ticket" />
     
    </Form.Group>
  
    <Form.Group controlId="formBasicBugDescription">
      <Form.Label>Password</Form.Label>
      <Form.Control type="text" placeholder="Bug omschrijving" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </Container>
    
  );
}

export default App;
