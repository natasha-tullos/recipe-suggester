import React from 'react';
import firebase from 'firebase';

import '../Stylesheets/Navbar.css';

const Navbar = ({ isAuthenticated, setAuth }) => {

  const signoutUser = async () => {
    await firebase.auth().signOut()
      .then(result => setAuth(false));
  }

  return (
    <nav>
      <a onClick={() => signoutUser()} className="sign-out">Sign Out</a>
    </nav>
  );
}

export default Navbar;