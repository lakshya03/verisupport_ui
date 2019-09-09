import React from 'react';
import './HomePage.css';
import LoginPage from '../LoginPage/LoginPage.react';
import img from '../../resources/images/logo.png';
import Register from '../Register/Register.react';
import HomeNav from '../HomeNav/HomeNav.react';

import {Link} from 'react-router-dom';
import { Button,Nav,Navbar,Form,FormControl } from 'react-bootstrap';
import { Layout,Header,Navigation,Drawer,Grid, Cell,FooterDropDownSection,FooterLinkList,Footer,FooterSection } from 'react-mdl';
const HomePage = () => {
   
    return (

        
          
       

  <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= {img}
              alt="avatar"
              className="avatar-img"
              />
            <br/><br/>
            <div className="banner-text">
              <h1>The Best Customer Experience are built with VeriSupport</h1>

            <hr/>

          <p>The Complete platform where you can raise incidents and track them.</p>
          <div className="social-links">


<a href="/login" rel="noopener noreferrer" target="_blank">
<i class="fa fa-sign-in" aria-hidden="true"><h5>Login</h5></i>

</a>


<a href="/register" rel="noopener noreferrer" target="_blank">
<i class="fa fa-user-plus" aria-hidden="true"><h5>Signup</h5></i>
</a>




</div>

      
            </div>
            
          </Cell>
          {/* <h2>Shubham</h2> */}
          
        </Grid>
        
      </div>
 
  
    )

}

export default HomePage;