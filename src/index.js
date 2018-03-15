import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

const title = "My Minimal React Webpack Babel Setup";

const App = ReactDOM.render(<div>{title}</div>, document.getElementById("app"));

export default hot(module)(App);
