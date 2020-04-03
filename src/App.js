import React from 'react';
import './styling/App.css';
import Nav from './Nav.js'
import Charge from './Charge.js'
import Recharge from './Recharge.js'
import Home from './Home.js'
import Leaders from './Leaders.js'
import Feelings from './Feelings.js'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{backgroundColor: '#2A4494'}}>
      
        <Router>
          <Nav/>
          <Switch>
              <Route exact path="/home"
                render={(props) => <Home />}
              />
              <Route exact path="/charge"
                render={(props) => <Charge />}
              />
              <Route exact path="/recharge"
                render={(props) => <Recharge />}
              />
              <Route exact path="/feelings"
                render={(props) => <Feelings />}
              />
              <Route exact path="/leaders"
                render={(props) => <Leaders />}
              />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
