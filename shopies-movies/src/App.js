import React from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import Home from "./views/Home"

function App() {
  return (
    <div>
      <Router>
          <Home />

      </Router>
    </div>
  );
}

export default App;
