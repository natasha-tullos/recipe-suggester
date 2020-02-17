import React, { useState } from 'react';
import firebase from 'firebase';

import Firebase from '../FirebaseConfig';
import '../Stylesheets/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const loginWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();

    Firebase.auth().signInWithPopup(provider).then(function(result) {
      setToken(result.credential.accessToken);
      setUser(result.user);
    })
  }

  const loginWithEmail = async () => {
    await Firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="email-login-container">
        <label htmlFor="email">Email</label>
        <input 
          className="email" 
          placeholder="email" 
          type="email" 
          onChange={(text) => setEmail(text)}
        />

        <label htmlFor="password">Password</label>
        <input 
          className="password" 
          placeholder="password" 
          type="password" 
          onChange={(text) => setPassword(text)}
        />

        <button className="login-btn" onClick={() => loginWithEmail()}>Login</button>
      </div>
      <div className="google-login-container">
        <button className="google-btn" onClick={() => loginWithGoogle()}>
          <img width="20px" alt="Google sign-in" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
          <p>Sign in With Google</p>
        </button>
      
        <a href="/signup" className="signup-link">Don't have an account? Sign up for one here</a>
      </div>
    </div>
  )
}

export default Login;