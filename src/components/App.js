/****** <INITIAL IMPORT STATEMENTS> ******/
import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header.js";
import Home from "./Home.js";
import SignUp from "./SignUp.js";
import LogIn from "./LogIn.js";
// import services from "../service";
import "./app.css";
/****** </INITIAL IMPORT STATEMENTS> ******/

/****** <CODE MAYBE FOR DATABASING /> ******/
// const mapDispatchToProps = dispatch => ({
//   onLoad: payload => dispatch({ type: "LOAD_DWARF", payload })
// });

/****** <RENDER THE PAGE /> ******/
const App = ({ onLoad }) => {
  // services.dwarves.all().then(dwrf => onLoad(dwrf));
  return (
    <div className="page">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </div>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);