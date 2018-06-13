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
  let goHome = event => {
    event.preventDefault();
    props.history.push("/user");
  };

  let findProfile = event => {
    event.preventDefault();
    props.history.push("/profiletemp");
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>List of profiles.</h3>
            </Col>
          </FormGroup>

          <Col smOffset={2} sm={6}>
            <Button type="submit" onClick={event => goHome(event)}>
              User Home
            </Button>
          </Col>

          <Col smOffset={2} sm={6}>
            <Button type="submit" onClick={event => findProfile(event)}>
              A profile.
            </Button>
          </Col>
        </Form>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(Profiles);
