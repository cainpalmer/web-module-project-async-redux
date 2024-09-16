import logo from './logo.svg';
import './App.css';
import React from 'react';
import PokeDex from './components/PokeDex';

function App() {
  return (
    <div className = "App">
      <h1>Kanto PokéDex</h1>
      <PokeDex />
    </div>
  );
}

export default App;
