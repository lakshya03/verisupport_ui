import React from "react";
import { Grid, Header, Segment, Button } from "semantic-ui-react";
import { Form, Row, Col } from "react-bootstrap";
import Appbar from "../Appbar/Appbar.react";

const UserProfile = () => {
  return (
    <div>
      <Appbar></Appbar>
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            <br></br> Profile Test
          </Header>
          <Segment>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" readOnly defaultValue="Name" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Mobile Number
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    readOnly
                    placeholder="Mobile Number"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Email Id
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Email Id"
                    readOnly
                    defaultValue="email@example.com"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Address
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Address" readOnly />
                </Col>
              </Form.Group>
              <Button color="blue" fluid size="large">
                Go Back
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default UserProfile;
