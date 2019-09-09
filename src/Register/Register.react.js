//main Page for Registration of users to add incidents and check incidents
import React from "react";
import axios from "axios";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import HomeNav from "../HomeNav/HomeNav.react";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      customer: {
        customerName: "",
        phone_number: 0,
        email: "",
        password: "",
        customerId: 0
      },
      success: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

  
    this.setState(prevState => ({
      customer: { ...prevState.customer, [name]: value }
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.customer);

    axios
      .post(`http://localhost:4040/addCustomer`, this.state.customer)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ success: res.data });
        if (this.state.success) {
          console.log("shit");
         
          this.props.history.push("/login");
        } else {
          console.log(" Enter the values ");
        }
      });
  }

  render() {
    return (
      <div>
        <HomeNav></HomeNav>
        <div>
          <Grid centered columns={2}>
            <Grid.Column>
            
              <br />
              <Segment>
                <Form size="large" onSubmit={this.handleSubmit}>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Name"
                    name="customerName"
                    type="text"
                    value={this.state.customerName}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    icon="mobile"
                    iconPosition="left"
                    placeholder="Phone Number"
                    name="phone_number"
                    type="number"
                    value={this.state.phone_number}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    icon="at"
                    iconPosition="left"
                    placeholder="Email"
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    icon="user plus"
                    iconPosition="left"
                    placeholder="Employee Id"
                    type="text "
                    name="customerId"
                    value={this.state.customerId}
                    onChange={this.handleChange}
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
