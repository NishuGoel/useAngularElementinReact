import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Login form in React */}
        <prod-card username='Enter your name' password='Enter new password'></prod-card>
        <ng-search-bar textfield='Well, let us enter something from this react app now!'></ng-search-bar>
      </header>
    </div>
  );
}

export default App;
