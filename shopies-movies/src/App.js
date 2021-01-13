import React from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Nominations from "./views/Nominations"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
           <Home />
        </Route>
        <Route path="nominations">
         <Nominations />
        </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
