import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Register} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
