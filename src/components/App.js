/****** <INITIAL IMPORT STATEMENTS> ******/
import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header.js";
import Home from "./Home.js";
import SignUp from "./SignUp.js";
import LogIn from "./LogIn.js";
import User from "./User.js";
import Profiles from "./ProfileList.js";
import Area from "./Area.js";
import Reviews from "./Reviews.js";
import "./app.css";
/****** </INITIAL IMPORT STATEMENTS> ******/

/****** <ROUTING THE PAGES /> ******/
const App = ({ onLoad }) => {
  return (
    <div className="page">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/user" component={User} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/area" component={Area} />
        <Route path="/reviews" component={Reviews} />
      </div>
    </div>
  );
};

export default App;
