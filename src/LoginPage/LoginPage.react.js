import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../loginreducer';
import {Menu} from 'semantic-ui-react';
import axios from 'axios';
import HomeNav from '../HomeNav/HomeNav.react';
import './LoginPage.css'

import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
  } from 'semantic-ui-react';
import Register from '../Register/Register.react';
  


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         login:{
          phoneNumber:'',
            password:''
         },
         success:0
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(e) {
      let target = e.target;
      let value = target.value;
      let name = target.name;
      this.setState(prevState =>( {login:{...prevState.login,[name]:value}}));
    
    }
    onSubmit(e) {
      e.preventDefault();
  
                  axios.post(`http://localhost:4040/getCustomerByPhoneNumber`,this.state.login)
                  .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.setState({success:res.data})
                    if(this.state.success)
  { 
    console.log("shit");
    // <Register/>
    // this.props.history('/register');
    this.props.history.push('/incident');
   
   
  }
  else{
    console.log(" Wrong Credentials ");
  }
  
      })
// }).then(() => {
//   this.setState({ success: res.data })})
  console.log(this.state.success);
  
  
   
  }
    render() {
      const { activeItem } = this.state

        return (
          <div >
              {/* <div className="ui blue  inverted menu">
              <div className="ui inverted  secondary menu">
              <a className="item"
         
         active={activeItem === 'home'}
         onClick={this.handleItemClick}
       >
        <Link to="/">Home</Link>
       </a>
          </div>
          </div>
         */}
         <HomeNav></HomeNav>
         
            <div className="home-land" >
              <Grid centered columns={2} >
    <Grid.Column>
      <Header as="h2" textAlign="center">
        
      </Header>
      <Segment>
        <Form size="large" onSubmit={this.onSubmit}>
          <Form.Input
            fluid
            icon="phone"
            iconPosition="left"
            placeholder="Phone Number"
            name="phoneNumber"
            value={this.state.phoneNumber} onChange={this.handleChange}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password} onChange={this.handleChange}
          />
           <Button color="blue" fluid size="large">
            Login
          </Button>
        </Form>
      </Segment>
    <Message> 
     
        Not registered yet?  <Link to="/register">Sign Up</Link>
        {/* Not registered yet?  <Navigation></Navigation><Redirect to='/register'> Sign Up </Redirect> */}
      </Message>
    </Grid.Column>
  </Grid>
  {/* <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && this.props.history.push('/incident') }
          { loginError && <div>{loginError.message}</div> }
        </div> */}
            </div>
            </div>
           
        );
    }

  }


export default LoginPage;