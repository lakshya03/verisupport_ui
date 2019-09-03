import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
  } from 'semantic-ui-react';


class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
 <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h1" textAlign="center">
        Register
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Name"
          />
          <Form.Input
            fluid
            icon="mobile"
            iconPosition="left"
            placeholder="Phone Number"
            type="text"
          />
          <Form.Input
            fluid
            icon="at"
            iconPosition="left"
            placeholder="Email"
          />
           <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
           <Form.Input
            fluid
            icon="user plus"
            iconPosition="left"
            placeholder="Employee Id"
            type="password"
          />
          <Button color="blue" fluid size="large">
            Register
          </Button>
        </Form>
      </Segment>
    
    </Grid.Column>
  </Grid>

            </div>
        );
    }
}

export default Register;


