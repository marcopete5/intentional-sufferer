import React, { Component } from 'react';
import './App.css'

//your Components
import Home from './Home';
import History from './History';
import Nav from './Navbar';

//import Route Components here
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/history' component={History} />
        </Switch>
      </div>
    );
  }
}

export default App;
