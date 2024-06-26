
import React from 'react';
import Consumer from './Consumer';
import Producer from './Producer';
import './WelcomeScreen.css';

function WelcomeScreen({ items, addItem }) {
  return (
    <div className="welcome-screen">
      <header className="App-header">
        <img src="logo.svg" className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">Welcome to Impromptu!</h1>
      </header>
      <div className="sections">
        <div className="section">
          <h2>Consumers</h2>
          <Consumer addItem={addItem} />
        </div>
        <div className="section">
          <h2>Producers</h2>
          <Producer addItem={addItem} />
        </div>
      </div>
      <div className="common-screen">
        <h2>Common Screen</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WelcomeScreen;
