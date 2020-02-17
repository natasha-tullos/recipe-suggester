import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
  Link
} from "react-router-dom";

import Login from './Components/Login';
import Signup from './Components/Signup';
import Main from './Components/Main';
import './Stylesheets/App.css';

function App() {
  const [isAuthenticated, setAuth] = useState(false);
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  return (
   <Router>
      <Switch>
        <Route exact path="/">
          <Home isAuthenticated={isAuthenticated} setAuth={setAuth} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <PrivateRoute path="/home">
          <Main />
        </PrivateRoute>
      </Switch>
   </Router>
  );
}

const Home = ({ isAuthenticated, setAuth }) => {
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
        <Login isAuthenticated={isAuthenticated} setAuth={setAuth} />
        {isAuthenticated ? <Redirect to="/home" /> : '' }
    </div>
  );
}


export default App;
