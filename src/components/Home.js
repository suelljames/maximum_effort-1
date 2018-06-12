import React from "react";
import { Jumbotron, Grid, Button, Well } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = props => (
  <Jumbotron>
    <Grid>
      <h1>Welcome to Maximum_Effort!</h1>
      <Well>
        <ul>
          <li>Butts?</li>
          <li>More butts?</li>
          <li>Fewer butts?</li>
        </ul>
      </Well>
      <p>Maximum_Effort will help you find butts!</p>
    </Grid>
  </Jumbotron>
);

export default Home;
