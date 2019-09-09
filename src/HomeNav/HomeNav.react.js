import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './HomeNav.css';
import img from '../../resources/images/logosmal.png';
const HomeNav = () => {

    return (
        <div>
        <Navbar bg="primary" variant="dark">
    
     <Nav className="mr-auto">
       <Nav.Link href="/">Home</Nav.Link>
     
     </Nav>
     <Form inline>
     
      
     </Form>
   </Navbar>
   <div className="homenav-grid">
   <img 
              src= {img}
              alt="avatar"
              className="logo-img"
              />
     </div>
     </div>
    );

}

export default HomeNav;