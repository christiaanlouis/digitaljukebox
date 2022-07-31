import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './Components/TestComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent></TestComponent>
      </header>
    </div>
  );
}

export default App;
