import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import Main from './Main';
import '../Stylesheets/Navbar.css';

const Navbar = ({ isAuthenticated, setAuth }) => {

  const signoutUser = async () => {
    await firebase.auth().signOut()
      .then(result => setAuth(false));
  }

  return (
    <nav>
      <Link className="nav-link" to={{ pathname: "/home", isAuthenticated, setAuth }}>Home</Link>
      <a onClick={() => signoutUser()} className="sign-out">Sign Out</a>
    </nav>
  );
}

export default Navbar;