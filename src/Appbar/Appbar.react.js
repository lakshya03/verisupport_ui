import React from 'react';
import {Menu} from 'semantic-ui-react';
import './Appbar.css';
import {Link} from 'react-router-dom';

export default class MenuExampleBasic extends React.Component{
    state = {}
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state

    return (
      
        <div className="ui blue  inverted menu">
              <div className="ui inverted  secondary menu">
     
        <a className="item"
         
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
         <Link to="/incident">Home</Link>
        </a>

        <a className="item" name='addincident' active={activeItem === 'addincident'} onClick={this.handleItemClick}>
        <Link to="/addIncident">Add Incident</Link>
        </a>

        <a className="item" 
           
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
         <Link to="/register">Profile</Link>
        </a>

        {/* <a className="item" 
         
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
         <Link to="/"><Link to="/"></Link>Logout</Link>
        </a> */}
         
        
      
      </div>
      </div>
    
    );
    }
}

