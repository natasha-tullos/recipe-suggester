import React, { useState } from 'react';

import '../Stylesheets/Login.css';

const Login = () => {

  const loginWithGoogle = () => {

  }

  const loginWithEmail = () => {

  }

  return (
    <div>
      <div class="email-login-container">
        <label htmlFor="email">Email</label>
        <input className="email" placeholder="email" />

        <label htmlFor="password">Password</label>
        <input className="password" placeholder="password" />
      </div>
    </div>
  )
}

export default Login;