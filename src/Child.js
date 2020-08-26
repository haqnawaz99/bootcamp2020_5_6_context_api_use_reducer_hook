import React, { useContext } from 'react';
import ValueContext from './ValueContext.js'
import valueContext from './ValueContext.js';
function Child(props) {
    let value = useContext(valueContext);
  return (
    <div>
        Child number {value[0]}
        <button onClick={()=>{value[1](++value[0])}}>Update Values</button>
    </div>
  );
} 
export default Child;
 