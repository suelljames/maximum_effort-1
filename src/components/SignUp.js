import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel,
  // Radio,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  interests: state.interests
});

const mapDispatchToProps = dispatch => ({
  addProfile: prfl =>
    dispatch({
      type: "ADD_PROFILE",
      payload: prfl
    })
});

const SignUp = ({ addProfile, history, interests }) => {
  let nameFirst,
    nameLast,
    nameUser,
    dateBirth,
    homeCity,
    homeState,
    homeZip,
    email,
    password,
    interest;

  let submitForm = event => {
    event.preventDefault();

    addProfile({
      nameFirst: nameFirst.value,
      nameLast: nameLast.value,
      nameUser: nameUser.value,
      dateBirth: dateBirth.value,
      homeCity: homeCity.value,
      homeState: homeState.value,
      homeZip: homeZip.value,
      email: email.value,
      password: password.value,
      interest: interest.value
    });

    history.push("/user");
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal onSubmit={event => submitForm(event)}>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>Create an account.</h3>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="First name"
                type="text"
                required
                inputRef={ref => {
                  nameFirst = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Last name"
                type="text"
                required
                inputRef={ref => {
                  nameLast = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                //Changed type from text to date =, allowing user to input birthdate//
                placeholder="Birth date"
                type="date"
                required
                inputRef={ref => {
                  dateBirth = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="City"
                type="city"
                required
                inputRef={ref => {
                  homeCity = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="State"
                type="text"
                required
                inputRef={ref => {
                  homeState = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Zip Code"
                type="zip"
                required
                inputRef={ref => {
                  homeZip = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="User name"
                type="text"
                required
                inputRef={ref => {
                  nameUser = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              {/* Set Type for E-mail to E-mail. So now it gives you an error if its not in email format. 
          Ex: Deku.Acadamia@yahoo.com=(Will Work)
          Ex: Deku.acadamiayahoo.com=(Will not Work) */}
              <FormControl
                placeholder="E-mail"
                type="email"
                required
                inputRef={ref => {
                  email = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                //Changed the type to Password to mask users password credentials
                placeholder="Password"
                type="password"
                required
                inputRef={ref => {
                  password = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Confirm Password"
                type="confirm"
                required
                inputRef={ref => {
                  password = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Main interest"
                componentClass="select"
                defaultValue={-1}
                inputRef={ref => {
                  interest = ref;
                }}
              >
                <option value={-1} disabled="disabled">
                  --select--
                </option>
                {interests.map(hbbs => (
                  <option key={hbbs.name} value={hbbs.name}>
                    {hbbs.cosmetic ? hbbs.cosmetic : hbbs.name}
                  </option>
                ))}
              </FormControl>
            </Col>
          </FormGroup>

          <Col smOffset={2} sm={6}>
            <Button type="submit">Submit</Button>
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
  )(SignUp)
);
