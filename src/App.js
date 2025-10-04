import React from 'react';
import Counter from './components/common/Counter';
import DarkModeToggle from './components/common/DarkModeToggle';
import Navbar from './components/layout/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter />
      <DarkModeToggle />
    </div>
  );
}

export default App;
