import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Components/Login';
import Signup from './Components/Signup';
import './Stylesheets/App.css';

function App() {
  return (
   <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
   </Router>
  );
}

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Macro Recipe Suggester</h1>
        <p className="info-note">Welcome to the macro recipe suggester!</p>
        <p className="info">
          This app lets you add your macros, and suggests recipes within
          the range of your macros.

          Login below to get started!
        </p>
      </header>
        <Login />
    </div>
  );
}


export default App;
