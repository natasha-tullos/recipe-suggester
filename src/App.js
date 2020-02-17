import React from 'react';

import Login from './Components/Login';
import './Stylesheets/App.css';

function App() {
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
