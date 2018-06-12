/****** <INITIAL IMPORT STATEMENTS> ******/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App.js";
// import rootReducer from "./reducers/index.js";
import "bootstrap/dist/css/bootstrap.css";
/****** </INITIAL IMPORT STATEMENTS> ******/

const store = createStore(
  // rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
