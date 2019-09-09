// The Navbar that is added on the top of all the components inside the customer dashboard
import React from 'react';
import {Navbar,Nav,Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class MenuExampleBasic extends React.Component{
    render(){
    return (
    <div>
          
          <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">VeriSupport</Navbar.Brand>
                <Nav className="mr-auto">
                      <Nav.Link href="/dashboard">Home</Nav.Link>
                      <Nav.Link href="/addincident">Add Incident</Nav.Link>
                      <Nav.Link href="/userprofile">Profile</Nav.Link>
               </Nav>
          <Form inline>
            <Button variant="outline-light"><Link to='/'>Log Out</Link></Button>
            {/* <Link to="/"><Icon cicular inverted color='blue' name='sign out'/></Link> */}
          </Form>
          </Navbar>
    </div>
    );
  }
}

