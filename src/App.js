import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js';
function App() {
  let[number, setNumber] = useState(45)
  return (
    <div>
      Hello world
      <Parent num = {number}>  </Parent>
      <button onClick={()=>{setNumber(++number)}}>Update Number</button>
    </div>
  );
} 
export default App;
