import React from 'react';
import { Button,Nav,Navbar,Form,FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import './HomeNav.css';

class HomeNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeItem } = this.state
        return (
            <div>
            <div className="ui blue  inverted menu">
            <div className="ui inverted  secondary menu">
            
        </div>
        </div>

                 
  {/* <Navbar bg="primary" variant="dark">
    
    <Nav className="mr-auto">

</Nav>

<Button className="mr-sm-2"  variant="outline-light" ><Link to="/login">Login</Link></Button>
<Button  className="mr-sm-2"  variant="outline-light"><Link to="/register">Signup</Link></Button>

</Navbar> */}
            </div>
        );
    }
}

export default HomeNav;