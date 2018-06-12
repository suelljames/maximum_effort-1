import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel,
  Radio,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Profiles = props => {
  let submitForm = event => {
    event.preventDefault();
    props.history.push("/user");
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal onSubmit={event => submitForm(event)}>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>List of profiles.</h3>
            </Col>
          </FormGroup>

          <Col smOffset={2} sm={6}>
            <Button type="submit">User Home</Button>
          </Col>
        </Form>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(Profiles);
