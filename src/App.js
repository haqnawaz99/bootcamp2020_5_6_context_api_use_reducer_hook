import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import valueContext from './ValueContext.js';
function App() {
  let value = 67;
  return (
    <valueContext.Provider value={value}>
    <div>
      Hello world
      <Parent>  </Parent>
    </div>
    </valueContext.Provider>
  );
} 
export default App;
