import logo from './logo.svg';
import './App.css';
import React from 'react';
import SecureTextBox from './SecureTextBox';
import SecureLogin from './SecureLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>Secure TextBox Example</h1>
      <SecureTextBox />
      
      <h1>Secure Login Example</h1>
      <SecureLogin />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
