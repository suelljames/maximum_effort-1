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
  Button,
  Panel
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import services from "../service";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const mapDispatchToProps = dispatch => ({
  removeProfile: _id => dispatch({ type: "REMOVE_PROFILE", payload: _id }),
  getProfiles: payload => {
    services.profiles
      .all()
      .then(prfl => dispatch({ type: "LOAD_PROFILE", payload: prfl }));
  }
});

const Profiles = props => {
  props.getProfiles();
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
            {!props.profiles.length && <h3>no profiles found</h3>}
            {props.profiles.map(prfl => {
              <Col sm={4} key={prfl._id}>
                <Panel>
                  <Panel.Heading>
                    {prfl.first} {prfl.last}
                  </Panel.Heading>
                  <Panel.Body>
                    ID: {prfl._id}
                    <br />
                    City: {prfl.city}
                    <br />
                    State: {prfl.state}
                  </Panel.Body>
                </Panel>
              </Col>;
            })}
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profiles)
);
