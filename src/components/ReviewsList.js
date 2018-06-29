import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  // FormControl,
  // ControlLabel,
  // Radio,
  Button,
  Panel
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import services from "../service";

const mapStateToProps = state => ({
  Reviews: state.Reviews
});

const mapDispatchToProps = dispatch => ({
  removeReview: _id =>
    dispatch({
      type: "REMOVE_REVIEW",
      payload: _id
    })
  /*   getProfiles: payload => {
    services.profiles.all().then(prfl =>
      dispatch({
        type: "LOAD_PROFILE",
        payload: prfl
      })
    );
  } */
});

const Reviews = ({ history, Reviews, getReviews }) => {
  // props.getProfiles();

  let goHome = event => {
    event.preventDefault();
    history.push("/Reviews");
  };

  let findReviews = event => {
    event.preventDefault();
    history.push("/ReviewsList");
  };

  return (
    <Jumbotron>
      <Grid>
        {!Reviews.length && <h3>no reviews found</h3>}
        {console.log(Reviews.length)}
        {Reviews.map(revi => (
          <Col sm={4} key={revi._id}>
            <Panel>
              <Panel.Heading>
                <Panel.Title>{revi.nameUser}</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                Search: {revi.Search}
                <br />
                E-Mail: {revi.EMail}
                <br />
                ReviewInfo: {revi.ReviewInfo}
              </Panel.Body>
            </Panel>
          </Col>
        ))}
        <Col smOffset={2} sm={6}>
          <Button type="submit" onClick={event => goHome(event)}>
            User Home
          </Button>
        </Col>
        <Col smOffset={2} sm={6}>
          <Button type="submit" onClick={event => findReviews(event)}>
            A profile.
          </Button>
        </Col>
      </Grid>
    </Jumbotron>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
