import React from 'react';
import {Menu} from 'semantic-ui-react';
import './Appbar.css';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class MenuExampleBasic extends React.Component{
    state = {}
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state

    return (
      
      //   <div className="ui blue  inverted menu">
      //         <div className="ui inverted  secondary menu">
     
      //   <a className="item"
         
      //     active={activeItem === 'home'}
      //     onClick={this.handleItemClick}
      //   >
      //    <Link to="/incident">Home</Link>
      //   </a>

      //   <a className="item" name='addincident' active={activeItem === 'addincident'} onClick={this.handleItemClick}>
      //   <Link to="/addIncident">Add Incident</Link>
      //   </a>

      //   <a className="item" 
           
      //     active={activeItem === 'profile'}
      //     onClick={this.handleItemClick}
      //   >
      //    <Link to="/userprofile">Profile</Link>
      //   </a>
        

      //   <a className="item" 
      //     active={activeItem === 'profile'}
      //     onClick={this.handleItemClick}
      //   >
      //    <Link to="/"><Link to="/"></Link>Logout</Link>
      //   </a> 
         
        
      
      // </div>
      // </div>
    <div>
       <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">VeriSupport</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/incident">Home</Nav.Link>
      <Nav.Link href="/addincident">Add Incident</Nav.Link>
      <Nav.Link href="/userprofile">Profile</Nav.Link>
    </Nav>
    <Form inline>
    
      <Button variant="outline-light"><Link to='/'>Log Out</Link></Button>
    </Form>
  </Navbar>
    </div>
    );
    }
}

