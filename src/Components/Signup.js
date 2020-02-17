import React, { useState } from 'react';

import Firebase from '../FirebaseConfig';
import '../Stylesheets/Signup.css';

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const signupWithEmail = async () => {
    console.log(email)
    if (password === confirmedPassword) {
      await Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
          setSuccessMessage('Successfully created account! Redirecting...');

          setTimeout(() => window.history.back(), 2000);
        })
        .catch(err => console.log(err));
    } else {
      setErrorMessage('Passwords don\'t match.')
    }
  }

  return (
    <div className="account-container">
      <h2 className="title">Create an Account</h2>
      <div className="email-signup-container">
        <label htmlFor="email">Email</label>
        <input 
          className="email" 
          placeholder="email" 
          type="email" 
          onChange={(text) => setEmail(text.target.value) }
        />

        <label htmlFor="password">Password</label>
        <input 
          className="password" 
          placeholder="password" 
          type="password" 
          onChange={(text) => setPassword(text.target.value)}
        />

        <label htmlFor="password">Confirm Password</label>
        <input 
          className="password" 
          placeholder="password" 
          type="password" 
          onChange={(text) => setConfirmedPassword(text.target.value)}
        />

        <button className="signup-btn" onClick={() => signupWithEmail()}>Login</button>

        <p className="success">{successMessage}</p>
        <p className="error">{errorMessage}</p>
      </div>
    </div>
  )
}

export default Signup;