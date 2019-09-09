import React from 'react';
import axios from 'axios';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
  } from 'semantic-ui-react';
  import HomeNav from '../HomeNav/HomeNav.react';

class Register extends React.Component {
 
  constructor() {
    super();

    this.state = {
      customer :{customerName:'',
      phone_number:0,
      email: '',
      password: '',
      customerId:0},
      success:0
        
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
  let target = e.target;
  let value = target.value;
  let name = target.name;

  // this.setState({
  //   [name]: value
  // });
  this.setState(prevState =>( {customer:{...prevState.customer,[name]:value}}));

}
handleSubmit(e) {
  e.preventDefault();

  // console.log('The form was submitted with the following data:');
  // const customer = {
   
  //   customerName:this.state.customerName,
  //   phone_number:this.state.phone_number,
  //   email: this.state.email,
  //   password: this.state.password,
  //   customerId:this.state.customerId
  // }
  console.log(this.state.customer);
  
axios.post(`http://localhost:4040/addCustomer`, this.state.customer)
.then(res => {
  console.log(res);
  console.log(res.data);
  this.setState({success:res.data})
  if(this.state.success)
  { 
    console.log("shit");
    // <Register/>
    // this.props.history('/register');
    this.props.history.push('/login');
   
   
  }
  else{
    console.log(" Enter the values ");
  }
})
// fetch({
//   method: 'POST',
//   url: 'http://localhost:4040/addCustomer',
//   body: customer,
//   headers: {
//    'Content-Type': 'application/json',
//    'Accept': 'application/json'
//  }
// })
//   .then(function(response) {
//       return response.json()
//     }).then(function(body) {
//       console.log(body);
//     });
}




    render() {
      const { activeItem } = this.state
        return (
          <div>
              <div className="ui blue  inverted menu">
              <div className="ui inverted  secondary menu">
              <a className="item"
         
         active={activeItem === 'home'}
         onClick={this.handleItemClick}
       >
        <Link to="/">Home</Link>
       </a>
          </div>
          </div>
            <div >
 <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h1" textAlign="center">
        Register
      </Header>
      <Segment>
        <Form size="large" onSubmit={this.handleSubmit}>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Name"
            name="customerName"
            type="text"
            value={this.state.customerName} onChange={this.handleChange}
          />
          <Form.Input
            fluid
            icon="mobile"
            iconPosition="left"
            placeholder="Phone Number"
            name="phone_number"
            type="number"
            value={this.state.phone_number} onChange={this.handleChange}
          />
          <Form.Input
            fluid
            icon="at"
            iconPosition="left"
            placeholder="Email"
            name="email"
            type="text"
            value={this.state.email} onChange={this.handleChange}
          />
           <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password} onChange={this.handleChange}
          />
           <Form.Input
            fluid
            icon="user plus"
            iconPosition="left"
            placeholder="Employee Id"
            type="text "
            name="customerId"
            value={this.state.customerId} onChange={this.handleChange}
          />
          <Button color="blue" fluid size="large">
            Register
          </Button>
        </Form>
      </Segment>
    
    </Grid.Column>
  </Grid>

            </div>
            </div>
            
        );
    } 
}

export default Register;